//
//  HomeNewAlbumItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNewAlbumItemView: View {
    var item: HomeNewAlbumItem
    var imageSize = (UIScreen.main.bounds.width - 60 ) / 2
    
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Image(item.albumArt)
                .resizable()
                .frame(width: imageSize, height: imageSize, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
            Text(item.title).foregroundColor(.white)
            Text(item.artist).foregroundColor(.gray)
        }
    }
}

struct HomeNewAlbumItemView_Previews: PreviewProvider {
    static var previews: some View {
        HomeNewAlbumItemView(item: HomeNewAlbumItem(albumArt: "mag-dummy1", title: "Never Gonna Dance", artist: "태민(TAEMIN)")).background(Color.black)
    }
}
