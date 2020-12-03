//
//  HomeNewAlbumItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNewAlbumItemView: View {
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
