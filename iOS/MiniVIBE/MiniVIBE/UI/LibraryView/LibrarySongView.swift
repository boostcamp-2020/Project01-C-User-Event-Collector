//
//  LibraryArtistView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/09.
//

import SwiftUI
import Combine

struct LibrarySongView: View {
    var body: some View {
        ScrollView {
            LazyVGrid(
                columns: [.init(.flexible())],
                pinnedViews: [.sectionHeaders]
            ) {
                Section(header: PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})) {
                    ForEach(MockItemFactory.imageURLSongs) { song in
                        HStack {
                            AsyncImageView(url: song.imageURLString)
                                .frame(width: 40, height: 40, alignment: .center)
                            VStack(alignment: .leading, spacing: .defaultSpacing) {
                                Text(song.title).vibeTitle3()
                                Text(song.artist).vibeMainText()
                            }
                            Spacer()
                            Button(action: {
                                
                            }, label: {
                                Image(systemName: "heart.fill")
                            })
                        }.padding(.horizontal, .defaultPadding)
                    }
                }
            }
            .padding(.horizontal, .defaultPadding)
        }.animation(.none)
    }
}
