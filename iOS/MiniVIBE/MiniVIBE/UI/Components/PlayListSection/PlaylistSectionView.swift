//
//  PlaylistSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import SwiftUI

struct PlaylistSectionView: View {
    let viewModel: Self.ViewModel
    init(viewModel: Self.ViewModel) {
        self.viewModel = viewModel
    }
    
    var body: some View {
        playListSectionScrollView
    }
}

extension PlaylistSectionView {
    var name: String {
        String("\(Self.self)/\(viewModel.id)")
    }
}

private extension PlaylistSectionView {
    var playListSectionScrollView: some View {
        VStack {
            NavigationLink(destination: PlaylistMoreView(viewModel: viewModel)) {
                MoreHeaderView(title: viewModel.title)
            }.emitEventIfTapped(event: TapEvent(component: name, target: TapEvent.Target.more))
            SectionScrollView {
                playlistsView
            }
        }
    }
}

private extension PlaylistSectionView {
    var playlistsView: some View {
        ForEach(viewModel.playlists) { playlist in
            NavigationLink(destination: PlaylistDetailView(viewModel: PlaylistDetailView.ViewModel(container: viewModel.container, playlist: playlist))) {
                ImageItemView(image: Image(playlist.imageURLString), width: viewModel.width) {
                    Text(playlist.title)
                        .vibeTitle3()
                    Text(playlist.subtitle)
                        .vibeMainText()
                    Text(playlist.description ?? "")
                        .vibeMainText()
                        .lineLimit(2)
                }
            }.emitEventIfTapped(event: TapEvent(component: name, target: TapEvent.Target.playlist))
        }
    }
}
