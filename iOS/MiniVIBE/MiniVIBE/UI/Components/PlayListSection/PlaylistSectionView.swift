//
//  PlaylistSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import SwiftUI

struct PlaylistSectionView: View {
    static var name: String {
        return String(describing: Self.self)
    }
    let viewModel: Self.ViewModel
    init(viewModel: Self.ViewModel) {
        self.viewModel = viewModel
    }
    
    var body: some View {
        playListSectionScrollView
    }
}

private extension PlaylistSectionView {
    var playListSectionScrollView: some View {
        VStack {
            NavigationLink(destination: PlaylistMoreView(viewModel: viewModel)) {
                MoreHeaderView(title: viewModel.title)
            }
            SectionScrollView {
                ForEach(viewModel.playlists) { playlist in
                    NavigationLink(destination: PlaylistDetailView(viewModel: PlaylistDetailView.ViewModel(container: viewModel.container, playlist: playlist))) {
                        ImageItemView(image: Image(playlist.imageURLString), type: viewModel.type) {
                            Text(playlist.title)
                                .vibeTitle3()
                            Text(playlist.subtitle)
                                .vibeMainText()
                            Text(playlist.description ?? "")
                                .vibeMainText()
                                .lineLimit(2)
                        }
                    }
                }
            }
        }
    }
}
