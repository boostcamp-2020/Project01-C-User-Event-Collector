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
        SquareItemView(image: Image(item.image), type: .one) {
            Text(item.title).vibeTitle2()
            Text(item.description ?? "").vibeMainText()
        }
    }
}
