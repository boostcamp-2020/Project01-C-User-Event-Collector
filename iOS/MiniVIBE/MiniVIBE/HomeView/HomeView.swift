//
//  HomeView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeView<PlayingBar: View>: View {
    var playingBar: PlayingBar
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
                        HomeVibeRecommendSectionView()
                        HomeNewAlbumSectionView()
                        HomeMagazineSectionView()
                        HomeNowSectionView()
                        HomeFooterView()
                    }
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
        HomeView(playingBar: NowPlayingBar())
            .preferredColorScheme(.light)
            .environmentObject(MusicPlayer())
    }
}
