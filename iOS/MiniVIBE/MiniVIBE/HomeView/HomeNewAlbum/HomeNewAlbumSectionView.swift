//
//  HomeNewAlbumSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNewAlbumSectionView: View {
    private var newAlbums: [Album] = [
        Album(imageURLString: "newAlbum-dummy1", title: "ARTIST. New Bi", artist: "Anonymous Artists", songs: []),
        Album(imageURLString: "newAlbum-dummy2", title: "Darling", artist: "양다일", songs: []),
        Album(imageURLString: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel", songs: [])]
    var body: some View {
        homeNewAlbumSectionScrollView
    }
}

private extension HomeNewAlbumSectionView {
    private enum Constant {
        static let title: String = "좋아할 최신 앨범"
    }
    
    var homeNewAlbumSectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title)
            SectionScrollView {
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
