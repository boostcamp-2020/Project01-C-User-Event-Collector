//
//  ChartView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct ChartView<PlayingBar: View>: View {
    var playingBar: PlayingBar
    var body: some View {
        NavigationView {
            ZStack {
                Color.black.edgesIgnoringSafeArea(.top)
                ScrollView(.vertical, showsIndicators: false) {
                    ChartHeaderView()
                    LazyVStack(spacing: 40) {
                        Group {
                            TodayTop100SectionView()
                            DomesticRiseSectionView()
                            BillBoardKPop100SectionView()
                            OverseasRiseSectionView()
                            BillBoardHot100SectionView()
                            VIBEKaraokeTop100SectionView()
                            Billboard200AlbumsSectionView()
                            MusicVideoTop50SectionView()
                            SearchSongTop100SectionView()
                            OverseasRise2YearsAgoSectionView()
                        }
                        NewAlbumSectionView()
                    }.padding(.bottom, 100) // musicPlayer만큼 여백 추가
                }
                VStack {
                    Spacer()
                    playingBar
                }
                .padding(.top)
            }.navigationBarHidden(true)
        }
    }
}
