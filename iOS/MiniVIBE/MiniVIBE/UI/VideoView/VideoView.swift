//
//  VideoView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct VideoView: View {
    @State private var items: [Video] = [Video(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단"),
                                         Video(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단"),
                                         Video(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단")]
    var body: some View {
        NavigationView {
            ZStack {
                Color.black.edgesIgnoringSafeArea(.top)
                ScrollView(.vertical, showsIndicators: false) {
                    VideoHeaderView()
                    LazyVStack(spacing: 40) {
                        ForEach(items) { item in
                            ImageItemView(image: Image(item.imageURLString), type: .one, ratio: 0.5) {
                                HStack {
                                    Text(item.title).vibeTitle3()
                                    Text(item.artist).vibeMainText()
                                    Spacer()
                                    Button(action: {}) {
                                        Image(systemName: "ellipsis")
                                            .foregroundColor(.white)
                                    }
                                }
                            }
                        }
                    }.padding(.bottom, NowPlayingBarView.height)
                }
                .padding(.top)
            }.navigationBarHidden(true)
        }
    }
}
