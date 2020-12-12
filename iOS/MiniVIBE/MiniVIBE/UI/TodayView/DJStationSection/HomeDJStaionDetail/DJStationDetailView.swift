//
//  DJStationDetailView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/02.
//

import SwiftUI

struct DJStationDetailView: View {
    private let rows = [GridItem(.fixed(.twoItemImageWidth)), GridItem(.fixed(.twoItemImageWidth))
    ]
    @State private var items: [DJStationItem] = []
    @State private var mockItems: [DJStationItem]
        = [DJStationItem(image: "HomeDJStationSection1"),
           DJStationItem(image: "HomeDJStationSection2"),
           DJStationItem(image: "HomeDJStationSection3"),
           DJStationItem(image: "HomeDJStationSection1"),
           DJStationItem(image: "HomeDJStationSection2"),
           DJStationItem(image: "HomeDJStationSection3"),
           DJStationItem(image: "HomeDJStationSection1"),
           DJStationItem(image: "HomeDJStationSection2"),
           DJStationItem(image: "HomeDJStationSection3")]
    var body: some View {
        HomeDJStationDetailScrollView
            .navigationBarHidden(true)
    }
}

private extension DJStationDetailView {
    private enum Constant {
        static let navigationBarTitle: String = "DJ 스테이션"
        static let recentlyPlayedTitle: String = "최근 들은 스테이션"
        static let byFeelingTitle: String = "느낌별 스테이션"
        static let byGenreTitle: String = "장르 스테이션"
    }
    
    var HomeDJStationDetailScrollView: some View {
        ZStack {
            Color.black.ignoresSafeArea(edges: .vertical)
            VStack {
                DetailHeaderView(title: Constant.navigationBarTitle)
                ScrollView(.vertical, showsIndicators: false) {
                    SectionHeaderView(Constant.recentlyPlayedTitle) {
                        SectionScrollView {
                            ForEach(mockItems) { item in
                                DJStationItemView(item: item)
                            }
                        }
                    }
                    SectionHeaderView(Constant.byFeelingTitle) {
                        LazyVGrid(columns: rows, spacing: .defaultSpacing) {
                            ForEach(mockItems) { item in
                                DJStationItemView(item: item)
                            }
                        }
                    }
                    SectionHeaderView(Constant.byGenreTitle) {
                        LazyVGrid(columns: rows, spacing: .defaultSpacing) {
                            ForEach(mockItems) { item in
                                DJStationItemView(item: item)
                            }
                        }
                    }
                }
            }
        }.onAppear {
            emitEvent(event: MoveEvent(next: Self.name, setPrePath: true))
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
