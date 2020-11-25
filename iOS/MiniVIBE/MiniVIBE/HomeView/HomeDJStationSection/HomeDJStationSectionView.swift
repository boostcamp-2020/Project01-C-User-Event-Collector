//
//  HomeDJStationSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomeDJStationSectionView: View {
    @State private var items: [HomeDJStationSectionItem] = []
    @State private var mockItems: [HomeDJStationSectionItem]
        = [HomeDJStationSectionItem(image: "HomeDJStationSection1"),
           HomeDJStationSectionItem(image: "HomeDJStationSection2"),
           HomeDJStationSectionItem(image: "HomeDJStationSection3")]
    var body: some View {
        HomeDJStationSectionScrollView
    }
}

private extension HomeDJStationSectionView {
    private enum Constant {
        static let title: String = "DJ 스테이션"
        static let moreButtonName: String = "더보기"
    }
    
    var HomeDJStationSectionScrollView: some View {
        VStack {
            HStack {
                Text(Constant.title).vibeTitle2()
                Spacer()
                Button(Constant.moreButtonName, action: {})
                    .vibeMainText()
            }.padding()
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHStack(spacing: 20) {
                    ForEach(mockItems) { item in
                        HomeDJStationSectionItemView(item: item)
                    }
                }
                .padding(.leading)
            }
        }
        
    }
}

struct HomeDJStationSectionViewPreviews: PreviewProvider {
    static var previews: some View {
        HomeDJStationSectionView()
            .previewLayout(.sizeThatFits)
            .background(Color.black)
    }
}
