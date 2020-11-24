//
//  HomeSummarySectionItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import SwiftUI

struct HomeSummarySectionItemView: View {
    private enum Constant {
        static let imageWidth: CGFloat = UIScreen.main.bounds.width - 20
        static let imageHeight: CGFloat = (UIScreen.main.bounds.width - 20) / 2
    }
    
    var item: HomeSummaryItem
    var body: some View {
        VStack(alignment: .leading) {
            Text(item.category)
                .foregroundColor(.red)
            Image(item.albumArt)
                .resizable()
                .scaledToFit()
                .frame(width: Constant.imageWidth, height: Constant.imageHeight,
                       alignment: .leading).aspectRatio(contentMode: .fill)
            Text(item.title).bold().font(.system(size: 18))
                .foregroundColor(.white)
            Text(item.description ?? "").foregroundColor(.gray)
        }
    }
}
