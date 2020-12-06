//
//  HomeView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        GeometryReader { proxy in
            NavigationView {
                ZStack {
                    Color.black.edgesIgnoringSafeArea(.top)
                    ScrollView(.vertical, showsIndicators: false) {
                        HomeHeaderView()
                        LazyVStack(spacing: 40) {
                            HomeSummarySectionView()
                            HomeArtistSection()
                            PlaylistSectionView(viewModel: PlaylistSectionView.ViewModel(
                                                    id: 0, title: "내 취향 플레이리스트", type: .two))
                            HomeDJStationSectionView()
                            FiveRowSongGridView(
                                viewModel: FiveRowSongGridView.ViewModel(id: 0, title: "최근 들은 노래", showsRanking: false))
                            PlaylistSectionView(viewModel: PlaylistSectionView.ViewModel(
                                                    id: 1, title: "VIBE 추천 플레이리스트", type: .one))
                            AlbumSectionView(viewModel: AlbumSectionView.ViewModel(
                                                id: 1, title: "좋아할 최신앨범", showsRanking: false))
                            HomeMagazineSectionView()
                            HomeNowSectionView()
                            HomeFooterView()
                        }
                        .padding(.bottom, NowPlayingBarView.height)
                    }.preference(key: Size.self, value: [proxy.frame(in: CoordinateSpace.global)])
                    .padding(.top)
                    .navigationBarHidden(true)
                }
            }
        }
    }
}
