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
    
    var body: some View {
        NavigationView {
            ZStack {
                Color.black.edgesIgnoringSafeArea(.top)
                ScrollView(.vertical, showsIndicators: false) {
                    chartHeaderView
                    LazyVStack(spacing: 40) {
                        Group {
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(title: "오늘 Top 100",
                                                                         subtitle: "12월 2일 오전 7시 업데이트"))
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(title: "국내 급상승 🔥",
                                                                         subtitle: "12월 3일 오전 1시 업데이트"))
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(title: "billboard K-Pop 100",
                                                                         subtitle: "12월 3일 오전 1시 업데이트"))
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(title: "해외 급상승 🔥",
                                                                         subtitle: "12월 3일 오전 1시 업데이트"))
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(title: "billboard HOT 100",
                                                                         subtitle: "12월 3일 오전 1시 업데이트"))
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(title: "VIBE 노래방 Top 100 🎤",
                                                                         subtitle: "12월 3일 오전 1시 업데이트"))
                            AlbumSectionView(viewModel: AlbumSectionView.ViewModel(title: "billboard 200 Albums"))
                            MusicVideoTop50SectionView()
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(title: "음악검색 Top 100"))
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(title: "2년전 오늘, 해외 Top 100"))
                        }
                        AlbumSectionView(viewModel: AlbumSectionView.ViewModel(title: "최신앨범", showsRanking: false))
                    }.padding(.bottom, NowPlayingBarView.height)
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
