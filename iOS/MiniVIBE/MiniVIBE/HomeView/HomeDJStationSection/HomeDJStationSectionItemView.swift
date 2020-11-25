//
//  HomeDJStationSectionItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomeDJStationSectionItemView: View {
    private enum Constant {
        static let imageWidth: CGFloat = (UIScreen.main.bounds.width - 70) * 0.5
        static let imageHeight: CGFloat = (UIScreen.main.bounds.width - 70) * 0.5
    }
    
    var item: HomeDJStationSectionItem
    var body: some View {
        Image(item.image)
            .resizable()
            .frame(width: Constant.imageWidth, height: Constant.imageHeight,
                   alignment: .leading)
            .aspectRatio(contentMode: .fill)
            .overlay(
                Image(systemName: "play.circle.fill")
                    .foregroundColor(.white)
                    .opacity(/*@START_MENU_TOKEN@*/0.8/*@END_MENU_TOKEN@*/)
                    .padding(5), alignment: .bottomTrailing)
    }
}
