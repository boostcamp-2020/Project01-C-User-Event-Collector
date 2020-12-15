//
//  SummaryItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import SwiftUI

struct SummaryItemView: View {
    let item: SummaryItem
    var body: some View {
        VStack(alignment: .leading) {
            Text(item.category)
                .font(.system(size: 14))
                .foregroundColor(.vibePink)
            ImageItemView(image: Image(item.image), type: .large, ratio: 0.5) {
                Text(item.title).vibeTitle2()
                Text(item.description ?? "").vibeMainText()
            }
        }
    }
}
