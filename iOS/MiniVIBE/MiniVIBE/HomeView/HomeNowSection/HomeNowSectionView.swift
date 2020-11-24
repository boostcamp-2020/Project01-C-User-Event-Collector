//
//  NowSectionView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeNowSectionView: View {
    @State var nowReplayItems: [HomeNowReplayItem] = [
        HomeNowReplayItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
        HomeNowReplayItem(albumArt: Image("now-dummy2"), description: "어벤걸스"),
        HomeNowReplayItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
        HomeNowReplayItem(albumArt: Image("now-dummy2"), description: "어벤걸스"),
        HomeNowReplayItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
        HomeNowReplayItem(albumArt: Image("now-dummy2"), description: "어벤걸스")
    ]
    
    var body: some View {
        VStack(alignment: .leading) {
            HStack {
                Image("home-now")
                    .renderingMode(/*@START_MENU_TOKEN@*/.template/*@END_MENU_TOKEN@*/)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 100, height: 30, alignment: .leading)
                    .foregroundColor(.white)
                Text("다시듣기").font(.system(size: 30)).foregroundColor(.white)
            }.padding(.leading)
            nowSectionScrollView
        }
    }
}

private extension HomeNowSectionView {
    var nowSectionScrollView: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 20.0) {
                ForEach(nowReplayItems) { item in
                    HomeNowSectionItemView(item: item)
                }
            }
            .padding(.horizontal, 10)
        }
    }
}

struct NowSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeNowSectionView().background(Color.black)
    }
}
