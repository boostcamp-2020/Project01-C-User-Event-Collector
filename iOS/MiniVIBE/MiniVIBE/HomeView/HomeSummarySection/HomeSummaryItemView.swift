//
//  HomeSummaryItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import SwiftUI

struct HomeSummaryItemView: View {
    var item: HomeSummaryItem
    var body: some View {
        ImageItemView(image: Image(item.image), type: .one, ratio: 0.5) {
            Text(item.title).vibeTitle2()
            Text(item.description ?? "").vibeMainText()
        }
    }
}
