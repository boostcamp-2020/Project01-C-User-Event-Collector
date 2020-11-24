//
//  HomeVibeRecommendSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/25.
//

import SwiftUI

struct HomeVibeRecommendSectionView: View {
    var vibeRecommendItems: [HomeVibeRecommendItem] = [
        HomeVibeRecommendItem(playListImage: "now-dummy2", title: "잠 못드는 밤", description: "쌀쌀해진 날씨에 헛헛한 마음, 외로움에 젖어드는 고요한 밤. 적막한 사이로 부드럽게 스며드")
    ]
    
    var body: some View {
        VStack {
            HStack {
                Text("VIBE 추천 플레이리스트")
                    .foregroundColor(Color.white)
                    .font(.title2)
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                Spacer()
                Text("더보기")
                    .foregroundColor(.gray)
            }
            homeVibeReccomendScrollView
        }.padding(.horizontal, 20)
    }
}

extension HomeVibeRecommendSectionView {
    var homeVibeReccomendScrollView: some View {
        ScrollView(.horizontal) {
            HStack(spacing: 20) {
                ForEach(vibeRecommendItems) { item in
                    HomeVibeRecommendItemView(item: item)
                }
            }
        }
    }
}

struct HomeVibeRecommendSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeVibeRecommendSectionView().background(Color.black)
    }
}
