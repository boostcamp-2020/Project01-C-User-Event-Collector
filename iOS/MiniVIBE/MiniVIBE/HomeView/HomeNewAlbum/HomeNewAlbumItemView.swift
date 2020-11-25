//
//  HomeNewAlbumItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNewAlbumItemView: View {
    var item: HomeNewAlbumItem
    private let imageSize = (UIScreen.main.bounds.width - 70 ) / 2
    var body: some View {
        VStack(alignment: .leading) {
            Image(item.albumArt)
                .resizable()
                .frame(width: imageSize, height: imageSize, alignment: .center)
            Text(item.title)
                .vibeTitle3()
                .lineLimit(1)
            Text(item.artist).vibeMainText()
        }.frame(width: imageSize)
    }
}

struct HomeNewAlbumItemView_Previews: PreviewProvider {
    static var previews: some View {
        HomeNewAlbumItemView(item: HomeNewAlbumItem(albumArt: "mag-dummy1", title: "Never Gonna Dance", artist: "태민(TAEMIN)")).background(Color.black)
    }
}
