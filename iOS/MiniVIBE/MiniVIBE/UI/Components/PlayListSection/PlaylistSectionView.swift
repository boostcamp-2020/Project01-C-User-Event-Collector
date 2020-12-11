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
            }.emitEventIfTapped(event: TapEvent(component: name, target: Target.more))
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
                    }.emitEventIfTapped(event: TapEvent(component: name, target: Target.playlist))
                }
            }
        }
    }
}

enum Target: CustomStringConvertible {
    case login
    case song
    case playlist
    case album
    case more
    case like
    case playPause
    case next
    case share
    case `repeat`
    case shuffle
    
    var description: String {
        switch self {
        case .login:
            return "login"
        case .song:
            return "song"
        case .playlist:
            return "playlist"
        case .album:
            return "album"
        case .more:
            return "more"
        case .like:
            return "like"
        case .playPause:
            return "playpause"
        case .next:
            return  "next"
        case .repeat:
            return "repeat"
        case .share:
            return "share"
        case .shuffle:
            return "shuffle"
        }
    }
}
