//
//  VideoView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct VideoView<PlayingBar: View>: View {
    @State private var items: [Viedo] = [Viedo(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단"),
                                         Viedo(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단"),
                                         Viedo(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단")]
    var playingBar: PlayingBar
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
                    }.padding(.bottom, 100) // musicPlayer만큼 여백 추가
                }
                VStack {
                    Spacer()
                    playingBar
                }
                .padding(.top)
            }.navigationBarHidden(true)
        }
    }
}
