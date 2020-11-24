//
//  SummarySectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/23.
//

import SwiftUI

struct HomeSummarySectionView: View {
    @State private var items: [SummaryItem] = []
    @State private var mockItems: [SummaryItem] = [                 SummaryItem(category: "지붕뚫고 급상승 🚀", albumArt: Image("MainSection1"), title: "급상승 차트 1위", description: "방탄소년단 : Life Goes On"),
                                                             SummaryItem(category: "스테이션", albumArt: Image("MainSection2"), title: "여유를 즐겨요", description: "장르별 스테이션 : 잔잔한 클래식"),
                                                             SummaryItem(category: "스테이션", albumArt: Image("MainSection3"), title: "여유를 즐겨요", description: "장르별 스테이션 : 잔잔한 클래식")
    ]
    var body: some View {
        SummarySectionScrollView(mainItems: $mockItems)
    }
}

private struct SummarySectionScrollView: View {
    @Binding var mainItems: [SummaryItem]
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHStack(spacing: 20.0) {
                ForEach(mainItems, id: \.id) { item in
                    SummarySectionItemView(item: item)
                }
            }
            .padding(.leading)
        }.statusBar(hidden: true)
        .onAppear { UIScrollView.appearance().isPagingEnabled = true }
    }
}

private struct SummarySectionItemView: View {
    var item: SummaryItem
        var body: some View {
            VStack(alignment: .leading) {
                Text(item.category)
                    .foregroundColor(.red)
                item.albumArt
                    .resizable()
                    .scaledToFit()
                    .frame(width: UIScreen.main.bounds.width - 20, height: 180, alignment: .leading).aspectRatio(contentMode: .fill)
                Text(item.title).bold().font(.system(size: 18))
                    .foregroundColor(.white)
                Text(item.description).foregroundColor(.gray)
            }
    }
}

private struct SummaryItem: Identifiable {
    let id = UUID()
    var category: String
    var albumArt: Image
    var title: String
    var description: String
   
}

struct SummarySectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeSummarySectionView()
    }
}
