//
//  DJStationItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct DJStationItemView: View {
    let item: DJStationItem
    var body: some View {
        ImageItemView(image: Image(item.image), type: .normal) {}
            .overlay(
                Image(systemName: "play.circle.fill")
                    .foregroundColor(.white)
                    .opacity(0.8)
                    .padding(5), alignment: .bottomTrailing)
    }
}
