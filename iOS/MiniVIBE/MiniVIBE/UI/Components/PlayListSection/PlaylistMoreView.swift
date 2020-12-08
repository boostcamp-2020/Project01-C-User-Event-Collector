//
//  PlaylistMoreView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import SwiftUI

struct PlaylistMoreView: View {
    let viewModel: PlaylistSectionView.ViewModel
    var body: some View {
        ZStack {
            Color.black.ignoresSafeArea(edges: .vertical)
            VStack {
                DetailHeaderView(title: viewModel.title)
                ScrollView(.vertical, showsIndicators: false) {
                    LazyVStack(alignment: .leading) {
                        ForEach(viewModel.playlists) { playlist in
                            HStack {
                                Image(playlist.imageURLString)
                                    .resizable()
                                    // FIXME: 고정값
                                    .frame(width: 100, height: 100, alignment: .center)
                                VStack(alignment: .leading, spacing: .defaultSpacing) {
                                    Text(playlist.title).vibeTitle3()
                                    playlist.description.map({Text($0).vibeMainText().lineLimit(1)})
                                    Text(playlist.subtitle).vibeMainText()
                                }
                            }.padding(.horizontal, .defaultPadding)
                        }
                    }
                }
            }
        }.navigationBarHidden(true)
    }
}
