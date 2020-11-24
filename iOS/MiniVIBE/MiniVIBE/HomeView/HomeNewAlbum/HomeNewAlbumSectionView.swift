//
//  HomeNewAlbumSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNewAlbumSectionView: View {
    var newAlbums: [HomeNewAlbumItem] = [
        HomeNewAlbumItem(albumArt: "mag-dummy1", title: "Never Gonna Dance", artist: "태민(TAEMIN)"),
        HomeNewAlbumItem(albumArt: "mag-dummy2", title: "Walpurgis Night", artist: "여자친구(GIRLFRIEND)")
    ]
    
    var body: some View {
        VStack {
            HStack {
                Text("좋아할 최신 앨범")
                    .foregroundColor(Color.white)
                    .font(.title2)
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                Spacer()
                Text("더보기")
                    .foregroundColor(.gray)
            }
            newAlbumScrollView
        }.padding(.horizontal, 20)
    }
}

private extension HomeNewAlbumSectionView {
    var newAlbumScrollView: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 20) {
                ForEach(newAlbums) { item in
                    HomeNewAlbumItemView(item: item)
                }
            }
        }
    }
}

struct HomeNewAlbumSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeNewAlbumSectionView().background(Color.black)
    }
}
