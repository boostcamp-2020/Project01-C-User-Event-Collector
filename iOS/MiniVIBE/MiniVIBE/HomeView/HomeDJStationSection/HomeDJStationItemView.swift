//
//  HomeDJStationItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomeDJStationItemView: View {
    var item: HomeDJStationItem
    var body: some View {
        SquareItemView(image: Image(item.image), type: .two) {}
            .overlay(
                Image(systemName: "play.circle.fill")
                    .foregroundColor(.white)
                    .opacity(/*@START_MENU_TOKEN@*/0.8/*@END_MENU_TOKEN@*/)
                    .padding(5), alignment: .bottomTrailing)
    }
}
