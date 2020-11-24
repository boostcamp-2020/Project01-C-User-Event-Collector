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
            ScrollView {
                HomeHeaderView()
                LazyVStack(spacing: 40) {
                    HomeSummarySectionView()
                    HomeArtistSection()
                    HomePlayListSectionView()
                }
            }.padding(.top)
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
            .preferredColorScheme(.light)
    }
}
