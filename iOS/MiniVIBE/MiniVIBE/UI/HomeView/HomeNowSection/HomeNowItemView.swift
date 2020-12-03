//
//  HomeNowSectionItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNowItemView: View {
    var item: HomeNowReplayItem
    var body: some View {
        VStack(alignment: .leading) {
            item.albumArt
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: .twoItemImageWidth, height: .twoItemImageWidth * 1.6, alignment: .center)
                .clipped()
            Text(item.description).vibeTitle3()
        }
    }
}
