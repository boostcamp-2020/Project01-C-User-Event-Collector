//
//  PlaylistMoreView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import SwiftUI
import BCEventEmitter

struct PlaylistMoreView: View {
    let viewModel: PlaylistSectionView.ViewModel
    var body: some View {
        ZStack {
            Color.vibeBackground.ignoresSafeArea(edges: .vertical)
            VStack {
                DetailHeaderView(title: viewModel.title)
                ScrollView(.vertical, showsIndicators: false) {
                    VStack(alignment: .leading) {
                        playlistsView
                        Spacer()
                    }.padding(.horizontal, .defaultPadding)
                }
            }
        }.padding(.bottom, NowPlayingBarView.height)
        .navigationBarHidden(true)
        .onAppear {
            emitEvent(event: MoveEvent(next: "\(Self.name)/\(self.viewModel.id)", setPrePath: true))
        }
    }
}

private extension PlaylistMoreView {
    var playlistsView: some View {
        ForEach(viewModel.playlists) { playlist in
            NavigationLink(destination: PlaylistDetailView(viewModel: PlaylistDetailView.ViewModel(container: viewModel.container, playlist: playlist)) ) {
                HStack {
                    Image(playlist.imageURLString)
                        .resizable()
                        .frame(width: 100, height: 100, alignment: .center)
                    VStack(alignment: .leading, spacing: .defaultSpacing) {
                        Text(playlist.title).vibeTitle3()
                        playlist.description.map({Text($0).vibeMainText().lineLimit(1)})
                        Text(playlist.subtitle).vibeMainText()
                    }
                    Spacer()
                }
            }
        }
    }
}
