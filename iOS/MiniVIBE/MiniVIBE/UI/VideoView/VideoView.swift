//
//  VideoView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI
import BCEventEmitter

struct VideoView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    let viewModel: VideoView.ViewModel
    var body: some View {
        ZStack {
            NavigationView {
                ZStack {
                    Color.vibeBackground.ignoresSafeArea(edges: .top)
                    ScrollView(.vertical, showsIndicators: false) {
                        VideoHeaderView(viewModel: VideoHeaderView.ViewModel(container: viewModel.container))
                        LazyVGrid(columns: [.init(.adaptive(minimum: .largeItemImageMinWidth, maximum: .largeItemImageMaxWidth))], spacing: .defaultSpacing) {
                            videosView
                        }.padding(.bottom, NowPlayingBarView.height)
                        .padding(.horizontal, .defaultPadding)
                        Spacer()
                    }
                    .padding(.top)
                    .navigationBarHidden(true)
                }
            }
            NowPlayingBarView(musicPlayer: musicPlayer)
        }.onAppear {
            emitEvent(event: MoveEvent(next: ContentView.TabType.video.description))
        }
    }
}

extension VideoView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        let items: [Video] = MockItemFactory.videoItems
        init(container: DIContainer) {
            self.container = container
        }
    }
}

private extension VideoView {
    var videosView: some View {
        ForEach(viewModel.items) { item in
            ImageItemView(image: Image(item.imageURLString), width: .largeItemImageWidth, ratio: 0.5) {
                HStack {
                    Text(item.title).vibeTitle3()
                    Text(item.artist).vibeMainText()
                    Spacer()
                    Button(action: {}, label: {
                        Image(systemName: "ellipsis")
                            .foregroundColor(.white)
                    })
                }
            }
        }
    }
}
