//
//  HomeSummarySectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/23.
//

import SwiftUI

struct HomeSummarySectionView: View {
    @State private var items: [HomeSummaryItem] = MockItemFactory.homeSummaryItems
    var body: some View {
        homeSummarySectionScrollView
    }
}

private extension HomeSummarySectionView {
    var homeSummarySectionScrollView: some View {
        SectionScrollView {
            ForEach(items) { item in
                HomeSummaryItemView(item: item)
            }
        }
    }
}
