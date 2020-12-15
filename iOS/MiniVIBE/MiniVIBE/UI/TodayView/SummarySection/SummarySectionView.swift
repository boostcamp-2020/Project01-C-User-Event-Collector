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
                SummaryItemView(item: item)
            }
        }
    }
}
