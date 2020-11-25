//
//  HomePlayListSectionItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomePlayListItemView: View {
    private enum Constant {
        static let imageWidth: CGFloat = (UIScreen.main.bounds.width - 30 - (2 * .defaultSpacing)) * 0.5
    }
    
    var item: HomePlayListItem
    var body: some View {
        VStack(alignment: .leading) {
            Image(item.image)
                .resizable()
                .frame(width: Constant.imageWidth, height: Constant.imageWidth,
                       alignment: .leading)
                .aspectRatio(contentMode: .fill)
            Text(item.title).bold().vibeTitle3()
            Text(item.description ?? "").vibeMainText()

        }.frame(width: Constant.imageWidth)
    }
}
