//
//  HomeNewAlbumSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNewAlbumSectionView: View {
    private var newAlbums: [HomeNewAlbumItem] = [
        HomeNewAlbumItem(albumArt: "newAlbum-dummy1", title: "ARTIST. New Bi", artist: "Anonymous Artists"),
        HomeNewAlbumItem(albumArt: "newAlbum-dummy2", title: "Darling", artist: "양다일"),
        HomeNewAlbumItem(albumArt: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel")
    ]
    var body: some View {
        VStack {
            HStack {
                Text("좋아할 최신 앨범")
                    .vibeTitle2()
                Spacer()
                Text("더보기")
                    .vibeMainText()
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
