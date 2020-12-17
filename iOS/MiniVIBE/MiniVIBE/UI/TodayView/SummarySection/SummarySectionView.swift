//
//  SummarySectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/23.
//

import SwiftUI

struct SummarySectionView: View {
    private let items: [SummaryItem] = MockItemFactory.homeSummaryItems
    var body: some View {
        SectionScrollView {
            ForEach(items) { item in
                VStack(alignment: .leading) {
                    Text(item.category)
                        .font(.system(size: 14))
                        .foregroundColor(.vibePink)
                    ImageItemView(image: Image(item.image), width: .largeItemImageWidth, ratio: 0.5) {
                        Text(item.title).vibeTitle2()
                        Text(item.description ?? "").vibeMainText()
                    }
                }
            }
        }
        
    }
}
