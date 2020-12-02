//
//  HomeDJStationSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomeDJStationSectionView: View {
    @State private var items: [HomeDJStationItem] = []
    @State private var mockItems: [HomeDJStationItem]
        = [HomeDJStationItem(image: "HomeDJStationSection1"),
           HomeDJStationItem(image: "HomeDJStationSection2"),
           HomeDJStationItem(image: "HomeDJStationSection3")]
    var body: some View {
        homeDJStationSectionScrollView
    }
}

private extension HomeDJStationSectionView {
    private enum Constant {
        static let title: String = "DJ 스테이션"
    }
    
    var homeDJStationSectionScrollView: some View {
        VStack {
            NavigationLink(destination: HomeDJStationDetailView()) {
                    MoreHeaderView(title: Constant.title)
            }
            SectionScrollView {
                ForEach(mockItems) { item in
                    HomeDJStationItemView(item: item)
                }
            }
        }
    }
}

struct HomeDJStationSectionViewPreviews: PreviewProvider {
    static var previews: some View {
        HomeDJStationSectionView()
            .previewLayout(.sizeThatFits)
            .background(Color.black)
    }
}
