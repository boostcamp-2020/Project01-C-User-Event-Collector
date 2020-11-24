//
//  MagazineSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeMagazineSectionView: View {
    var magazineItems: [HomeMagazineItem] = [
        HomeMagazineItem(imageURL: "mag-dummy1", description: "New Release #16: \n이적, 빌리 아일리시"),
        HomeMagazineItem(imageURL: "mag-dummy2", description: "이주의 디깅 #84, \n여자친구")
    ]
    
    var body: some View {
        VStack {
            HStack {
                Text("매거진")
                    .foregroundColor(Color.white)
                    .font(.title2)
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                Spacer()
                Text("더보기")
                    .foregroundColor(.gray)
            }
            magazineScrollView
        }.padding(.horizontal, 20)
    }
}

private extension HomeMagazineSectionView {
    var magazineScrollView: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 20) {
                ForEach(magazineItems) { item in
                    HomeMagazineItemView(item: item)
                }
            }
        }
    }
}

struct MagazineSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeMagazineSectionView().background(Color.black)
    }
}
