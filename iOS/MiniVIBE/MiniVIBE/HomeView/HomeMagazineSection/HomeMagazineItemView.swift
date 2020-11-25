//
//  HomeMagazineItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeMagazineItemView: View {
    var item: HomeMagazineItem
    private let imageSize = UIScreen.main.bounds.width - 30
    var body: some View {
        ZStack(alignment: Alignment(horizontal: .leading, vertical: .bottom)) {
            Image(item.image)
                .resizable()
                .frame(width: imageSize, height: imageSize, alignment: .center)
            Text(item.description)
                .font(.title)
                .foregroundColor(.white)
                .fontWeight(.bold)
                .padding()
        }.frame(width: imageSize)
    }
}
