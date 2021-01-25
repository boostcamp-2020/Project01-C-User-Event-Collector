//
//  LibraryArtistView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/09.
//

import SwiftUI
import Combine

struct LibraryPlaylistView: View {
    @StateObject var viewModel: PlaylistSectionView.ViewModel
    var body: some View {
        ScrollView {
            LazyVStack {
                ForEach(MockItemFactory.playlists) { playlist in
                    NavigationLink(destination: PlaylistDetailView(viewModel: PlaylistDetailView.ViewModel(container: viewModel.container, playlist: playlist))) {
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
            }.padding(.horizontal, .defaultPadding)
        }
    }
}
