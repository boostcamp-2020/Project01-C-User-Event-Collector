//
//  HomeVibeRecommendItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/25.
//

import SwiftUI

struct HomeVibeRecommendItemView: View {
    private enum Constant {
        static let defaultSubtitle: String = "VIBE"
        static let imageWidth = (UIScreen.main.bounds.width) - 30 - .defaultSpacing
    }
    
    var item: HomeVibeRecommendItem
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Image(item.image)
                .resizable()
                .frame(width: Constant.imageWidth, height: Constant.imageWidth, alignment: .center)
            Text(item.title)
                .vibeTitle3()
            Text(item.subtitle ?? Constant.defaultSubtitle)
                .vibeMainText()
            Text(item.description ?? "")
                .vibeMainText()
                .lineLimit(2)
        }.frame(width: Constant.imageWidth)
    }
}
