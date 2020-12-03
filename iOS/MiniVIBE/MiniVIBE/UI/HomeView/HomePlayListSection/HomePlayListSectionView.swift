//
//  HomePlayListSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomePlayListSectionView: View {
    @State private var items: [HomePlayListItem] = []
    @State private var mockItems: [HomePlayListItem]
        = [HomePlayListItem(image: "HomePlayListSection1", title: "로맨틱 팝",
                                   description: "VIBE Pop"),
           HomePlayListItem(image: "HomePlayListSection2", title: "편견을 깨는 힙합 아이돌",
                                   description: "VIBE 국내 힙합"),
           HomePlayListItem(image: "HomePlayListSection3", title: "팝 트렌드",
                                   description: "VIBE Pop")]
    var body: some View {
        homePlayListSectionScrollView
    }
}

private extension HomePlayListSectionView {
    private enum Constant {
        static let title: String = "내 취향 플레이리스트"
    }
    
    var homePlayListSectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title)
            SectionScrollView {
                ForEach(mockItems) { item in
                    HomePlayListItemView(item: item)
                }
            }
        }
    }
}

struct HomePlayListSectionViewPreviews: PreviewProvider {
    static var previews: some View {
        HomePlayListSectionView()
            .previewLayout(.sizeThatFits)
            .background(Color.black)
    }
}
