//
//  HomeSummarySectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/23.
//

import SwiftUI

struct HomeSummarySectionView: View {
    @State private var items: [HomeSummaryItem] = []
    @State private var mockItems: [HomeSummaryItem]
        = [HomeSummaryItem(category: "지붕뚫고 급상승 🚀",
                           image: "HomeMainSection1",
                           title: "급상승 차트 1위", description: "방탄소년단 : Life Goes On"),
           HomeSummaryItem(category: "스테이션", image: "HomeMainSection2",
                           title: "여유를 즐겨요", description: "장르별 스테이션 : 잔잔한 클래식"),
           HomeSummaryItem(category: "새 앨범", image: "HomeMainSection3",
                           title: "방탄소년단", description: nil)]
    var body: some View {
        homeSummarySectionScrollView
    }
}

private extension HomeSummarySectionView {
    var homeSummarySectionScrollView: some View {
        SectionScrollView {
            ForEach(mockItems) { item in
                HomeSummaryItemView(item: item)
            }
        }
    }
}
