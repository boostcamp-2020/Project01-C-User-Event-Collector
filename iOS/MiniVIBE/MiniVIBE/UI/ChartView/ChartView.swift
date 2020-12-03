//
//  ChartView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct ChartView: View {
    private enum Constant {
        static let title: String = "차트"
    }
    
    let playingBar: NowPlayingBarView
    var body: some View {
        NavigationView {
            ZStack {
                Color.black.edgesIgnoringSafeArea(.top)
                ScrollView(.vertical, showsIndicators: false) {
                    chartHeaderView
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

private extension ChartView {
    var chartHeaderView: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
        }.padding()
    }
}
