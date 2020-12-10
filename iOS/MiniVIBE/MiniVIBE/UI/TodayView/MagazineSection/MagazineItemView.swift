//
//  MagazineItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct MagazineItemView: View {
    var item: Magazine
    var body: some View {
        ImageItemView(url: item.imageURLString, type: .one) {}
            .overlay(
                Text(item.title)
                    .font(.title)
                    .foregroundColor(.white)
                    .fontWeight(.bold)
                    .padding(), alignment: .bottomLeading)
    }
}
