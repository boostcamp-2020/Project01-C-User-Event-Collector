//
//  HomeDJStationDetailView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/02.
//

import SwiftUI

struct HomeDJStationDetailView: View {
    private let rows = [GridItem(.fixed(.twoItemImageWidth)), GridItem(.fixed(.twoItemImageWidth))
    ]
    @State private var items: [HomeDJStationItem] = []
    @State private var mockItems: [HomeDJStationItem]
        = [HomeDJStationItem(image: "HomeDJStationSection1"),
           HomeDJStationItem(image: "HomeDJStationSection2"),
           HomeDJStationItem(image: "HomeDJStationSection3"),
           HomeDJStationItem(image: "HomeDJStationSection1"),
           HomeDJStationItem(image: "HomeDJStationSection2"),
           HomeDJStationItem(image: "HomeDJStationSection3"),
           HomeDJStationItem(image: "HomeDJStationSection1"),
           HomeDJStationItem(image: "HomeDJStationSection2"),
           HomeDJStationItem(image: "HomeDJStationSection3")]
    var body: some View {
        HomeDJStationDetailScrollView
            .navigationBarHidden(true)
    }
}

private extension HomeDJStationDetailView {
    private enum Constant {
        static let navigationBarTitle: String = "DJ 스테이션"
        static let recentlyPlayedTitle: String = "최근 들은 스테이션"
        static let byFeelingTitle: String = "느낌별 스테이션"
        static let byGenreTitle: String = "장르 스테이션"
    }
    
    var HomeDJStationDetailScrollView: some View {
        ZStack {
            Color.black.edgesIgnoringSafeArea(.vertical)
            VStack {
                DetailHeaderView(title: Constant.navigationBarTitle)
                ScrollView(.vertical, showsIndicators: false) {
                    SectionHeaderView(Constant.recentlyPlayedTitle) {
                        SectionScrollView {
                            ForEach(mockItems) { item in
                                HomeDJStationItemView(item: item)
                            }
                        }
                    }
                    SectionHeaderView(Constant.byFeelingTitle) {
                        LazyVGrid(columns: rows, spacing: .defaultSpacing) {
                            ForEach(mockItems) { item in
                                HomeDJStationItemView(item: item)
                            }
                        }
                    }
                    SectionHeaderView(Constant.byGenreTitle) {
                        LazyVGrid(columns: rows, spacing: .defaultSpacing) {
                            ForEach(mockItems) { item in
                                HomeDJStationItemView(item: item)
                            }
                        }
                    }
                }
            }
        }
    }

}

private struct SectionHeaderView<Content: View>: View {
    private let content: Content
    private let title: String
    
    init(_ title: String, @ViewBuilder content: () -> Content) {
        self.content = content()
        self.title = title
    }
    
    var body: some View {
        Section(header: HStack {
            Text(title).vibeTitle2()
            Spacer()
        }.padding(.horizontal, .defaultPadding)) {
            content
                .padding(.bottom, 2 * .defaultPadding)
        }
    }
}
