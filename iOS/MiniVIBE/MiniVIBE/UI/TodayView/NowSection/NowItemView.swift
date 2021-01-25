//
//  NowItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct NowItemView: View {
    let item: NowReplayItem
    var body: some View {
        VStack(alignment: .leading) {
            item.albumArt
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: .normalItemImageWidth, height: .normalItemImageWidth * 1.6, alignment: .center)
                .clipped()
            Text(item.description).vibeTitle3()
        }
    }
}
