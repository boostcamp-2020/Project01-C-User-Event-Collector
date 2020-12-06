//
//  PlaylistDetailView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI

struct PlaylistDetailView: View {
    @State private(set) var playlist: Playlist
    let mock = MockItemFactory.imageURLSongs
    var body: some View {
        VStack {
            DetailHeaderView(title: playlist.title, subtitle: playlist.subtitle)
            ScrollView(.vertical, showsIndicators: false) {
                imageSection
                ZStack(alignment: .top) {
                    Color.black.frame(height: UIScreen.main.bounds.height)
                    songsSection
                        .background(Color.black)
                }
            }
        }
        .background(Color.black.opacity(0.6) .edgesIgnoringSafeArea(.all))
        .background(Image(playlist.imageURLString)
                        .resizable()
                        .scaledToFill()
                        .blur(radius: 20))
        .navigationBarHidden(true)
    }
}

private extension PlaylistDetailView {
    var imageSection: some View {
        VStack(alignment: .leading) {
            HStack {
                Image(playlist.imageURLString)
                    .resizable()
                    // FIXME: 고정값
                    .frame(width: 100, height: 100, alignment: .center)
                VStack(alignment: .leading, spacing: .defaultSpacing) {
                    Text(playlist.title).vibeTitle3()
                    playlist.description.map({Text($0).vibeMainText().lineLimit(1)})
                    Text(playlist.subtitle).vibeMainText()
                    Spacer()
                    Image(systemName: "arrow.down.to.line")
                        .font(.system(size: 20)).foregroundColor(.gray)
                }
                Spacer()
            }
            Text("어제 업데이트 ∙ 총 60곡, 4시간 55분").vibeTitle3()
        }.padding(.horizontal, .defaultPadding)
    }
}

private extension PlaylistDetailView {
    var songsSection: some View {
        LazyVGrid(
            columns: [.init(.fixed(.oneItemImageWidth))],
            pinnedViews: [.sectionHeaders]
        ) {
            Section(header:
                        PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})) {
                ForEach(mock) { song in
                    HStack(spacing: .defaultSpacing) {
                        Image(systemName: "circle").foregroundColor(.gray)
                        AsyncImageView(url: song.imageURLString)
                            .frame(width: 40, height: 40, alignment: .center)
                        VStack(alignment: .leading, spacing: .defaultSpacing) {
                            Text(song.title).vibeTitle3()
                            Text(song.artist).vibeMainText()
                        }
                        Spacer()
                        Image(systemName: "line.horizontal.3").foregroundColor(.gray)
                    }
                }
            }
        }.padding(.bottom, NowPlayingBarView.height)
    }
}
