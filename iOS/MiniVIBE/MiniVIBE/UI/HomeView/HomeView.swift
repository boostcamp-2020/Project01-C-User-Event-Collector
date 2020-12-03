//
//  HomeView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeView: View {
    let playingBar: NowPlayingBarView
    var body: some View {
        NavigationView {
            ZStack {
                Color.black.edgesIgnoringSafeArea(.top)
                ScrollView(.vertical, showsIndicators: false) {
                    HomeHeaderView()
                    LazyVStack(spacing: 40) {
                        HomeSummarySectionView()
                        HomeArtistSection()
                        HomePlayListSectionView()
                        HomeDJStationSectionView()
                        HomeRecentlyPlayedSectionView()
                        HomeVibeRecommendSectionView()
                        HomeNewAlbumSectionView()
                        HomeMagazineSectionView()
                        HomeNowSectionView()
                        HomeFooterView()
                    }
                    .padding(.bottom, 100) // musicPlayer만큼 여백 추가
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

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView(playingBar: NowPlayingBarView())
            .preferredColorScheme(.light)
            .environmentObject(MusicPlayer())
    }
}
