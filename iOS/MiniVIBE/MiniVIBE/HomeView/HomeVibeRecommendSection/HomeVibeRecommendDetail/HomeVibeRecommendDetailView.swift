//
//  HomeVibeRecommendDetailView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import SwiftUI

struct HomeVibeRecommendDetailView: View {
    private var vibeRecommendItems: [HomeVibeRecommendItem] = [
        HomeVibeRecommendItem(image: "vibe-dummy1",
                              title: "아시아 아티스트 어워즈 2020", description: "아시아아티스트어워즈2020을 먼저 만나는 방법!"),
        HomeVibeRecommendItem(image: "vibe-dummy2",
                              title: "Work/Study Lo-fi", description: "집중력이 필요한 시간에 듣기 좋은 차분한 멜로디와 간질간질한 질감의 로파이 비트."),
        HomeVibeRecommendItem(image: "vibe-dummy3",
                              title: "꿀 떨어지는 R&B", description: "꿀 떨어지는 보컬과 함께하는 꿈만 같은 하루.")]
    private enum Constant {
        static let headerTitle: String = "VIBE 추천 플레이리스트"
    }
    
    var body: some View {
        ZStack {
            Color.black.edgesIgnoringSafeArea(.vertical)
            VStack {
                DetailHeaderView(title: Constant.headerTitle)
                ScrollView(.vertical, showsIndicators: false) {
                    LazyVStack {
                        ForEach(vibeRecommendItems) { item in
                            ListItemView(item: item)
                        }
                    }
                }
            }
        }.navigationBarHidden(true)
    }
}

// FIXME: 재사용 분리
struct ListItemView: View {
    let item: HomeVibeRecommendItem
    var body: some View {
        HStack {
            Image(item.image)
                .resizable()
                // FIXME: 고정값
                .frame(width: 100, height: 100, alignment: .center)
            VStack(alignment: .leading, spacing: .defaultSpacing) {
                Text(item.title).vibeTitle3()
                Text(item.description ?? "").vibeMainText().lineLimit(1)
                Text("VIBE").vibeMainText()
            }
        }.padding(.horizontal, .defaultPadding)
    }
}

struct HomeVibeRecommendDetailView_Previews: PreviewProvider {
    static var previews: some View {
        HomeVibeRecommendDetailView()
    }
}
