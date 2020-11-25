//
//  HomeView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        ZStack {
            Spacer()
                .background(Color.black)
                .edgesIgnoringSafeArea([.top])
            ScrollView(/*@START_MENU_TOKEN@*/.vertical/*@END_MENU_TOKEN@*/, showsIndicators: false) {
                HomeHeaderView()
                LazyVStack(spacing: 40) {
                    HomeSummarySectionView()
                    HomeArtistSection()
                    HomePlayListSectionView()
                    HomeVibeRecommendSectionView()
                    HomeNewAlbumSectionView()
                    HomeMagazineSectionView()
                    HomeNowSectionView()
                }
                HomeFooterView()
            }.padding(.vertical)
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
            .preferredColorScheme(.light)
    }
}
