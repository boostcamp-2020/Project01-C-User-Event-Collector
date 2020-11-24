//
//  MagazineSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct MagazineSectionView: View {
    var magazineItem: [MagazineItem]
    
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
            MagazineScrollView(magazineItems: magazineItem)
        }.padding(.horizontal, 20)
    }
}

struct MagazineScrollView: View {
    var magazineItems: [MagazineItem]
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 20) {
                ForEach(magazineItems) { item in
                    MagazineItemView(item: item)
                }
            }
        }.onAppear { UIScrollView.appearance().isPagingEnabled = true }
    }
}

struct MagazineItemView: View {
    var item: MagazineItem
    var imageSize = UIScreen.main.bounds.width - 30
    
    var body: some View {
        ZStack(alignment: Alignment(horizontal: .leading, vertical: .bottom)) {
            Image(item.imageURL)
                .resizable()
                .frame(width: imageSize, height: imageSize, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
            Text(item.description)
                .font(.title)
                .foregroundColor(.white)
                .fontWeight(.bold)
                .padding()
        }
    }
}

struct MagazineItem: Identifiable {
    let id = UUID()
    
    var imageURL: String
    var description: String
}

struct MagazineSectionView_Previews: PreviewProvider {
    static var previews: some View {
        MagazineSectionView(magazineItem: [
            MagazineItem(imageURL: "now-dummy1", description: "New Release #16: \n이적, 빌리 아일리시"),
            MagazineItem(imageURL: "now-dummy2", description: "New Release #17, \n오마이걸 랄랄라")
            
            ])
            .background(Color.black)
    }
}
