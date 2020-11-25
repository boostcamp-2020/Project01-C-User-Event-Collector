//
//  MagazineSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeMagazineSectionView: View {
    private var magazineItems: [HomeMagazineItem] = [
        HomeMagazineItem(image: "mag-dummy1", description: "New Release #16: 이적, 빌리 아일리시"),
        HomeMagazineItem(image: "mag-dummy2", description: "이주의 디깅 #85, aespa"),
        HomeMagazineItem(image: "mag-dummy3", description: "CHROMEO 핼러윈 파티 현장 스케치")
        
    ]
    var body: some View {
        magazineScrollView
    }
}

private extension HomeMagazineSectionView {
    private enum Constant {
        static let title: String = "매거진"
    }
    
    var magazineScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title).padding()
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: .defaultSpacing) {
                    ForEach(magazineItems) { item in
                        HomeMagazineItemView(item: item)
                    }
                }
                .padding(.leading)
            }
        }
    }
}

struct MagazineSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeMagazineSectionView().background(Color.black)
    }
}
