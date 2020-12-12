//
//  NewsItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI

struct NewsItemView: View {
    var item: Magazine
    var body: some View {
        ImageItemView(image: Image(item.imageURLString), type: .one, ratio: 0.5) {}
            .overlay(
                VStack {
                    Spacer()
                    Color(.white).frame(height: .oneItemImageWidth * 0.25)
                        .overlay(
                            VStack(alignment: .leading) {
                                Text(item.title)
                                    .font(.system(size: 15))
                                    .foregroundColor(.black)
                                    .lineLimit(2)
                                Spacer()
                                HStack {
                                    Text("관련 뉴스 보기 ❯").vibeMainText()
                                    Spacer()
                                    Text("▶︎ 음악듣기")
                                        .font(.system(size: 14))
                                        .foregroundColor(.vibePink)
                                }
                            }.padding(.defaultPadding)
                        )
                }
            )
    }
}
