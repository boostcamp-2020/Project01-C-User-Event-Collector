//
//  SummarySectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/23.
//

import SwiftUI

struct SummarySectionView: View {
    static var name: String {
        return String(describing: Self.self)
    }
    @State private var items: [SummaryItem] = MockItemFactory.homeSummaryItems
    var body: some View {
        SectionScrollView {
            ForEach(items) { item in
                SummaryItemView(item: item)
            }
        }
    }
}
