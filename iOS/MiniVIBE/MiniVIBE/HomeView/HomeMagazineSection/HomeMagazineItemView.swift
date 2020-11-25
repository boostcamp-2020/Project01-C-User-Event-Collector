//
//  HomeMagazineItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeMagazineItemView: View {
    private enum Constant {
        static let imageWidth = (UIScreen.main.bounds.width) - 30 - .defaultSpacing
    }
    
    var item: HomeMagazineItem
    var body: some View {
        ZStack(alignment: Alignment(horizontal: .leading, vertical: .bottom)) {
            Image(item.image)
                .resizable()
                .frame(width: Constant.imageWidth, height: Constant.imageWidth, alignment: .center)
            Text(item.description ?? "")
                .font(.title)
                .foregroundColor(.white)
                .fontWeight(.bold)
                .padding()
        }.frame(width: Constant.imageWidth)
    }
}
