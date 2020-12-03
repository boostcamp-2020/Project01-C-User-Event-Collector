//
//  Billboard200AlbumsSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct Billboard200AlbumsSectionView: View {
    @State private var items: [HomePlayListItem] = []
    @State private var mockItems: [Album] = [
        Album(imageURLString: "newAlbum-dummy1", title: "ARTIST. New Bi", artist: "Anonymous Artists", songs: []),
        Album(imageURLString: "newAlbum-dummy2", title: "Darling", artist: "양다일", songs: []),
        Album(imageURLString: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel", songs: [])]
    var body: some View {
        billboard200AlbumsSectionScrollView
    }
}

private extension Billboard200AlbumsSectionView {
    private enum Constant {
        static let title: String = "billboard 200 Albums"
    }
    
    var billboard200AlbumsSectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title)
            SectionScrollView {
                ForEach(mockItems.indices) { index in
                    Billboard200AlbumsItemView(item: mockItems[index], rank: index)
                }
            }
        }
    }
}

private struct Billboard200AlbumsItemView: View {
    let item: Album
    let rank: Int
    var body: some View {
        ImageItemView(image: Image(item.imageURLString), type: .two) {
            HStack {
                Text("\(rank + 1)").vibeTitle3()
                Text("NEW").font(.system(size: 10))
                    .bold()
                    .foregroundColor(.vibePink)
                    }
            Text(item.title)
                .vibeTitle3()
                .lineLimit(1)
            Text(item.artist).vibeMainText()
        }
    }
}
