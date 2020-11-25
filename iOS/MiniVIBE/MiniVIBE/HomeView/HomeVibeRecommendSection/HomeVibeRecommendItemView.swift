//
//  HomeVibeRecommendItemView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/25.
//

import SwiftUI

struct HomeVibeRecommendItemView: View {
    var item: HomeVibeRecommendItem
    private let imageSize = (UIScreen.main.bounds.width) - 40
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Image(item.playListImage)
                .resizable()
                .frame(width: imageSize, height: imageSize, alignment: .center)
            Text(item.title)
                .vibeTitle3()
            Text("VIBE")
                .vibeMainText()
            Text(item.description)
                .vibeMainText()
                .lineLimit(2)
        }.frame(width: imageSize)
    }
}

struct HomeVibeRecommendItemView_Previews: PreviewProvider {
    static var previews: some View {
        HomeVibeRecommendItemView(item: HomeVibeRecommendItem(playListImage: "now-dummy2", title: "잠 못드는 밤", description: "쌀쌀해진 날씨에 헛헛한 마음, 외로움에 젖어드는 고요한 밤. 적막한 사이로 부드럽게 스며드")).background(Color.black)
    }
}
