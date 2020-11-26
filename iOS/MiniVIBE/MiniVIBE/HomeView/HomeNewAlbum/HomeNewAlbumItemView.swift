//
//  HomeNewAlbumItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNewAlbumItemView: View {
    var item: HomeNewAlbumItem
    var body: some View {
        SquareItemView(image: Image(item.image), type: .two) {
            Text(item.title)
                .vibeTitle3()
                .lineLimit(1)
            Text(item.artist).vibeMainText()
        }
    }
}
