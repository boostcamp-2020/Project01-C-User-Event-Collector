//
//  HomeNowSectionItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNowSectionItemView: View {
    var item: HomeNowReplayItem
    private let imageWidth = (UIScreen.main.bounds.width - 40) / 2
    var body: some View {
        VStack(alignment: .leading) {
            item.albumArt
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: imageWidth, height: 250, alignment: .center)
                .clipped()
            Text(item.description).vibeTitle3()
        }
    }
}
