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
        HomeNewAlbumItem(albumArt: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel")]
    var body: some View {
        newAlbumScrollView
    }
}
private extension HomeNewAlbumSectionView {
    private enum Constant {
        static let title: String = "좋아할 최신 앨범"
    }
    
    var newAlbumScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title).padding()
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: .defaultSpacing) {
                    ForEach(newAlbums) { item in
                        HomeNewAlbumItemView(item: item)
                    }
                }
            }.padding(.leading)
        }
    }
}

struct HomeNewAlbumSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeNewAlbumSectionView().background(Color.black)
    }
}
