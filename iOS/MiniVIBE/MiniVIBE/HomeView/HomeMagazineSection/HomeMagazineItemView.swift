//
//  HomeMagazineItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeMagazineItemView: View {
    var item: HomeMagazineItem
    var body: some View {
        SquareItemView(image: Image(item.image), type: .one) {}
            .overlay(
                Text(item.description ?? "")
                    .font(.title)
                    .foregroundColor(.white)
                    .fontWeight(.bold)
                    .padding(), alignment: .bottomLeading)
    }
}
