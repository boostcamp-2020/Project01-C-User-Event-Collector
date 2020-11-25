//
//  HomePlayListSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomePlayListSectionView: View {
    @State private var items: [HomePlayListSectionItem] = []
    @State private var mockItems: [HomePlayListSectionItem]
        = [HomePlayListSectionItem(title: "로맨틱 팝",
                                   image: "HomePlayListSection1", description: "VIBE Pop"),
           HomePlayListSectionItem(title: "편견을 깨는 힙합 아이돌",
                                   image: "HomePlayListSection2", description: "VIBE 국내 힙합"),
           HomePlayListSectionItem(title: "팝 트렌드",
                                   image: "HomePlayListSection3", description: "VIBE Pop")]
    var body: some View {
        HomePlayListSectionScrollView
    }
}

private extension HomePlayListSectionView {
    private enum Constant {
        static let title: String = "내 취향 플레이리스트"
        static let moreButtonName: String = "더보기"
    }
    
    var HomePlayListSectionScrollView: some View {
        VStack {
            HStack {
                Text(Constant.title).vibeTitle2()
                Spacer()
                Button(Constant.moreButtonName, action: {})
                    .vibeMainText()
            }.padding()
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHStack(spacing: 20) {
                    ForEach(mockItems) { item in
                        HomePlayListSectionItemView(item: item)
                    }
                }
                .padding(.leading)
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
