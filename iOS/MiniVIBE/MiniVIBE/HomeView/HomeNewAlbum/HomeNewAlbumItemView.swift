//
//  HomeNewAlbumItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNewAlbumItemView: View {
    private enum Constant {
        static let imageWidth: CGFloat = (UIScreen.main.bounds.width - 30 - (2 * .defaultSpacing)) * 0.5
    }
    
    var item: HomeNewAlbumItem
    var body: some View {
        VStack(alignment: .leading) {
            Image(item.albumArt)
                .resizable()
                .frame(width: Constant.imageWidth, height: Constant.imageWidth, alignment: .center)
            Text(item.title)
                .vibeTitle3()
                .lineLimit(1)
            Text(item.artist).vibeMainText()
        }.frame(width: Constant.imageWidth)
    }
}
