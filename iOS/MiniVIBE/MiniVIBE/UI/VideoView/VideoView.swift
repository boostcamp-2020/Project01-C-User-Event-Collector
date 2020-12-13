//
//  VideoView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct VideoView: View {
    @State private var items: [Video] = MockItemFactory.videoItems
    let viewModel: VideoView.ViewModel
    var body: some View {
        ZStack {
            NavigationView {
                ZStack {
                    Color.vibeBackground.ignoresSafeArea(edges: .top)
                    ScrollView(.vertical, showsIndicators: false) {
                        VideoHeaderView(viewModel: VideoHeaderView.ViewModel(container: viewModel.container))
                        LazyVGrid(columns: [.init(.adaptive(minimum: .largeItemImageMinWidth, maximum: .largeItemImageMaxWidth))], spacing: .defaultSpacing) {
                            ForEach(items) { item in
                                ImageItemView(image: Image(item.imageURLString), type: .one, ratio: 0.5) {
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
                        }.padding(.bottom, NowPlayingBarView.height)
                        .padding(.horizontal, .defaultPadding)
                        Spacer()
                    }
                    .padding(.top)
                    .navigationBarHidden(true)
                }
            }
            VStack {
                Spacer()
                HStack {
                    Spacer()
                    NowPlayingBarView()
                }
            }
        }.onAppear {
            emitEvent(event: MoveEvent(next: TabType.video.description))
        }
    }
}

extension VideoView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        
        init(container: DIContainer) {
            self.container = container
        }
    }
}
