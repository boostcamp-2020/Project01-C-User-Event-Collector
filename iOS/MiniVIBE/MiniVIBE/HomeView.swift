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
            VStack {
                NowSectionView(songItems: [
                                SongItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
                                SongItem(albumArt: Image("now-dummy2"), description: "어벤걸스"),
                               SongItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
                               SongItem(albumArt: Image("now-dummy2"), description: "어벤걸스"),
                               SongItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
                               SongItem(albumArt: Image("now-dummy2"), description: "어벤걸스")
                ]
                )
                
                HomeFooterView()
            }.background(Color.black)
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
