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
    }
    
    var item: HomeVibeRecommendItem
    var body: some View {
        SquareItemView(image: Image(item.image), type: .one) {
            Text(item.title)
                .vibeTitle3()
            Text(item.subtitle ?? Constant.defaultSubtitle)
                .vibeMainText()
            Text(item.description ?? "")
                .vibeMainText()
                .lineLimit(2)
        }
    }
}
