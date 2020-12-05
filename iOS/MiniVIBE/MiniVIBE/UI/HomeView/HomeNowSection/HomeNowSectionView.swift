//
//  NowSectionView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeNowSectionView: View {
    private var nowReplayItems: [HomeNowReplayItem] = MockItemFactory.nowReplayItems
    var body: some View {
        homeNowSectionScrollView
    }
}

private extension HomeNowSectionView {
    private enum Constant {
        static let image: String = "home-now"
        static let title: String = "다시듣기"
    }
    
    var homeNowSectionScrollView: some View {
        VStack(alignment: .leading) {
            HStack {
                Image(Constant.image)
                    .renderingMode(.template)
                    .resizable()
                    .scaledToFit()
                    .frame(height: 20, alignment: .leading)
                    .foregroundColor(.white)
                Text(Constant.title).vibeTitle2()
            }.padding()
            SectionScrollView {
                ForEach(nowReplayItems) { item in
                    HomeNowItemView(item: item)
                }
            }
        }
    }
}

struct NowSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeNowSectionView().background(Color.black)
    }
}
