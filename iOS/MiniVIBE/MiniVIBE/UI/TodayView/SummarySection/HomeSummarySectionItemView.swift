//
//  HomeSummarySectionItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import SwiftUI

struct HomeSummaryItemView: View {
    private enum Constant {
        static let imageWidth: CGFloat = UIScreen.main.bounds.width - 30 - .defaultSpacing
        static let imageHeight: CGFloat = (UIScreen.main.bounds.width - 30 - .defaultSpacing) * 0.5
    }
    
    var item: HomeSummaryItem
    var body: some View {
        VStack(alignment: .leading) {
            Text(item.category)
                .foregroundColor(.vibePink)
            Image(item.image)
                .resizable()
                .scaledToFit()
                .frame(width: Constant.imageWidth, height: Constant.imageHeight,
                       alignment: .leading).aspectRatio(contentMode: .fill)
            Text(item.title).vibeTitle2()
            Text(item.description ?? "").vibeMainText()
        }
    }
}
