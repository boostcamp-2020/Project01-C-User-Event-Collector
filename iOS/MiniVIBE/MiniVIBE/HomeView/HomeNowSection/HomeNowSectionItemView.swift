//
//  HomeNowSectionItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeNowSectionItemView: View {
    private enum Constant {
        static let imageWidth: CGFloat = (UIScreen.main.bounds.width - 30 - (2 * .defaultSpacing)) * 0.5
    }
    
    var item: HomeNowReplayItem
    var body: some View {
        VStack(alignment: .leading) {
            item.albumArt
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: Constant.imageWidth, height: Constant.imageWidth * 1.6, alignment: .center)
                .clipped()
            Text(item.description).vibeTitle3()
        }
    }
}
