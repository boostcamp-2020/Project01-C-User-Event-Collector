//
//  NowSectionView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeNowSectionView: View {
    private var nowReplayItems: [HomeNowReplayItem] = [
        HomeNowReplayItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
        HomeNowReplayItem(albumArt: Image("now-dummy2"), description: "어벤걸스"),
        HomeNowReplayItem(albumArt: Image("now-dummy3"), description: "6시 5분전")
    ]
    var body: some View {
        nowSectionScrollView
    }
}

private extension HomeNowSectionView {
    private enum Constant {
        static let image: String = "home-now"
        static let title: String = "다시듣기"
    }
    
    var nowSectionScrollView: some View {
        VStack(alignment: .leading) {
            HStack {
                Image(Constant.image)
                    .renderingMode(.template)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 100, height: 30, alignment: .leading)
                    .foregroundColor(.white)
                Text(Constant.title).vibeTitle1()
            }
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: .defaultSpacing) {
                    ForEach(nowReplayItems) { item in
                        HomeNowSectionItemView(item: item)
                    }
                }
            }
        }.padding(.leading)
    }
}

struct NowSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeNowSectionView().background(Color.black)
    }
}
