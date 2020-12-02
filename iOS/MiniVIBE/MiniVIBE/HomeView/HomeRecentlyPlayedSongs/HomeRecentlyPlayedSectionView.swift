//
//  HomeRecentlyPlayedSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/02.
//

import SwiftUI

struct HomeRecentlyPlayedSectionView: View {
    @State private var items: [Song] = []
    private var mockItems: [Song]
        = (0...30).map { idx -> Song in
            Song(imageURLString: "HomeDJStationSection1", title: "Test Music\(idx)", artist: "dochoi")
        }
    var body: some View {
        homeRecentlyPlayedSectionScrollView
    }
}

private extension HomeRecentlyPlayedSectionView {
    private enum Constant {
        static let title: String = "최근 들은 노래"
    }
    
    var homeRecentlyPlayedSectionScrollView: some View {
        VStack {
            // FIXME: 네비게이션 링크
           // NavigationLink(destination: _) {
                    MoreHeaderView(title: Constant.title)
         //   }
            SectionScrollView {
                FiveRowSongGirdView(songs: mockItems)
            }
        }
    }
}
