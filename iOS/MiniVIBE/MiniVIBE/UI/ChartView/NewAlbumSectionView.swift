//
//  NewAlbumSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct NewAlbumSectionView: View {
    @State private var items: [Album] = []
    @State private var mockItems: [Album] = [
        Album(imageURLString: "newAlbum-dummy1", title: "ARTIST. New Bi", artist: "Anonymous Artists", songs: []),
        Album(imageURLString: "newAlbum-dummy2", title: "Darling", artist: "양다일", songs: []),
        Album(imageURLString: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel", songs: [])]
    var body: some View {
        newAlbumSectionScrollView
    }
}

private extension NewAlbumSectionView {
    private enum Constant {
        static let title: String = "최신 앨범"
    }
    
    var newAlbumSectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title)
            SectionScrollView {
                ForEach(mockItems) { item in
                    NewAlbumItemView(item: item)
                }
            }
        }
    }
}

private struct NewAlbumItemView: View {
    var item: Album
    var body: some View {
        ImageItemView(image: Image(item.imageURLString), type: .two) {
            Text(item.title)
                .vibeTitle3()
                .lineLimit(1)
            Text(item.artist).vibeMainText()
        }
    }
}
