//
//  HomeVibeRecommendSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/25.
//

import SwiftUI

struct HomeVibeRecommendSectionView: View {
    private var vibeRecommendItems: [HomeVibeRecommendItem] = [
        HomeVibeRecommendItem(image: "vibe-dummy1",
                              title: "아시아 아티스트 어워즈 2020", description: "아시아아티스트어워즈2020을 먼저 만나는 방법!"),
        HomeVibeRecommendItem(image: "vibe-dummy2",
                              title: "Work/Study Lo-fi", description: "집중력이 필요한 시간에 듣기 좋은 차분한 멜로디와 간질간질한 질감의 로파이 비트."),
        HomeVibeRecommendItem(image: "vibe-dummy3",
                              title: "꿀 떨어지는 R&B", description: "꿀 떨어지는 보컬과 함께하는 꿈만 같은 하루.")]
    var body: some View {
        homeVibeReccomendSectionScrollView
    }
}

private extension HomeVibeRecommendSectionView {
    private enum Constant {
        static let title: String = "VIBE 추천 플레이리스트"
    }
    
    var homeVibeReccomendSectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title)
            SectionScrollView {
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
