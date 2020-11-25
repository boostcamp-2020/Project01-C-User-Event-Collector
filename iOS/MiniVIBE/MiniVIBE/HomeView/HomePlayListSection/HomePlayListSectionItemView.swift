//
//  HomePlayListSectionItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomePlayListSectionItemView: View {
    private enum Constant {
        static let imageWidth: CGFloat = (UIScreen.main.bounds.width - 70) * 0.5
        static let imageHeight: CGFloat = (UIScreen.main.bounds.width - 70) * 0.5
    }
    
    var item: HomePlayListSectionItem
    var body: some View {
        VStack(alignment: .leading) {
            Image(item.image)
                .resizable()
                .frame(width: Constant.imageWidth, height: Constant.imageHeight,
                       alignment: .leading)
                .aspectRatio(contentMode: .fill)
            Text(item.title).bold().vibeTitle3()
            Text(item.description ?? "").vibeMainText()

        }.frame(width: Constant.imageWidth)
    }
}
