//
//  TodayTop100SectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct TodayTop100SectionView: View {
    private enum Constant {
        static let title: String = "오늘 Top 100"
        static let subtitle: String = "12월 2일 오전 7시 업데이트"
    }
    
    @State private var items: [Song] = []
    private var mockItems: [Song]
        = (0...30).map { idx -> Song in
            Song(imageURLString: "HomeDJStationSection1", title: "Test Music\(idx)", artist: "dochoi")
        }
    var body: some View {
        VStack {
            // FIXME: 네비게이션 링크
            // NavigationLink(destination: _) {
            MoreHeaderView(title: Constant.title, subtitle: Constant.subtitle)
            //   }
            SectionScrollView {
                FiveRowSongGirdView(songs: mockItems, showsranking: true)
            }
        }
    }
}
