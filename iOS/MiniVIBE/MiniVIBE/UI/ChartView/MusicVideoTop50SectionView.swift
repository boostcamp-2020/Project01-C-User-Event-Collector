//
//  MusicVideoTop50SectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/23.
//

import SwiftUI

struct MusicVideoTop50SectionView: View {
    private var items: [MusicVideoTop50Item]
        = [MusicVideoTop50Item(image: "HomeMainSection3", title: "Life Goes On : Like an arrow", artist: "방탄소년단"),
           MusicVideoTop50Item(image: "HomeMainSection3", title: "Life Goes On : Like an arrow", artist: "방탄소년단"),
           MusicVideoTop50Item(image: "HomeMainSection3", title: "Life Goes On : Like an arrow", artist: "방탄소년단")]
    var body: some View {
        musicVideoTop50SectionScrollView
    }
}

private extension MusicVideoTop50SectionView {
    private enum Constant {
        static let title: String = "뮤직비디오 Top 50"
        static let subtitle: String = "12월 3일 오후 2시 업데이트"
    }
    
    var musicVideoTop50SectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title, subtitle: Constant.subtitle)
            SectionScrollView {
                ForEach(items.indices) { index in
                    MusicVideoTop50ItemView(item: items[index], rank: index)
                }
            }
        }
    }
}

private struct MusicVideoTop50ItemView: View {
    let item: MusicVideoTop50Item
    let rank: Int
    var body: some View {
        VStack(alignment: .leading) {
            ImageItemView(image: Image(item.image), width: .largeItemImageWidth, ratio: 0.5) {
                Text("\(rank + 1)").vibeTitle3()
                Text(item.title).vibeTitle3()
                Text(item.artist).vibeMainText()
            }
        }
    }
}

private struct MusicVideoTop50Item: Identifiable {
    let id = UUID()
    let image: String
    let title: String
    let artist: String
}
