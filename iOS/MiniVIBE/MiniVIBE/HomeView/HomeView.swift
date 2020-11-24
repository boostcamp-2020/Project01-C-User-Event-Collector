//
//  HomeView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        ScrollView {
            HomeHeaderView()
            LazyVStack(spacing: 40) {
                HomeSummarySectionView()
                HomeNewAlbumSectionView()
                HomeMagazineSectionView()
                HomeNowSectionView()
            }
            HomeFooterView()
        }.background(Color.black)
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
