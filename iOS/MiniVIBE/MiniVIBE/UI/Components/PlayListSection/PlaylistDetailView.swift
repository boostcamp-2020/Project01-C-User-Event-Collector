//
//  PlaylistDetailView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI
import BCEventEmitter

struct PlaylistDetailView: View {
    @StateObject var viewModel: Self.ViewModel
    @EnvironmentObject var musicPlayer: MusicPlayer
    let mock = MockItemFactory.imageURLSongs
    var body: some View {
        VStack {
            DetailHeaderView(title: viewModel.playlist.title, subtitle: viewModel.playlist.subtitle)
            ScrollView(.vertical, showsIndicators: false) {
                imageSection
                ZStack(alignment: .top) {
                    Color.vibeBackground.frame(height: UIScreen.main.bounds.height)
                    songsSection
                        .background(Color.vibeBackground)
                }
            }
        }
        .background(Color.vibeBackground.opacity(0.6).ignoresSafeArea())
        .background(Image(viewModel.playlist.imageURLString)
                        .resizable()
                        .scaledToFill()
                        .blur(radius: 20))
        .navigationBarHidden(true)
        .onAppear {
            emitEvent(event: MoveEvent(next: "\(Self.name)/\(self.viewModel.playlist.id)", setPrePath: true))
        }
    }
}

private extension PlaylistDetailView {
    var imageSection: some View {
        VStack(alignment: .leading) {
            HStack {
                Image(viewModel.playlist.imageURLString)
                    .resizable()
                    .frame(width: 100, height: 100, alignment: .center)
                VStack(alignment: .leading, spacing: .defaultSpacing) {
                    Text(viewModel.playlist.title).vibeTitle3()
                    Text(viewModel.playlist.subtitle).vibeMainText()
                    Spacer()
                    Image(systemName: "arrow.down.to.line")
                        .font(.system(size: 20)).foregroundColor(.gray)
                }
                Spacer()
            }
            VStack {
                viewModel.playlist.description.map({Text($0).vibeMainText().lineLimit(1)})
                Text("어제 업데이트 ∙ 총 60곡, 4시간 55분").vibeTitle3()
            }
        }.padding(.horizontal, .defaultPadding)
    }
}

private extension PlaylistDetailView {
    var songsSection: some View {
        LazyVGrid(
            columns: [.init(.flexible())],
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
                    }.onTapGesture {
                        musicPlayer.playinglist.append(song)
                        musicPlayer.play(index: musicPlayer.playinglist.count - 1)
                    }
                }
            }
        }.padding(.bottom, NowPlayingBarView.height)
        .padding(.horizontal, .defaultPadding)
    }
}

extension PlaylistDetailView {
    final class ViewModel: ObservableObject {
        @Published private(set) var playlist: Playlist
        let container: DIContainer

        init(container: DIContainer, playlist: Playlist) {
            self.container = container
            self.playlist = playlist
        }
    }
}
