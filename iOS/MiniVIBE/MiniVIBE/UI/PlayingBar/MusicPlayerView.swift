//
//  MusicPlayerView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/29.
//

import SwiftUI

struct MusicPlayerView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @Binding var isPresented: Bool
    var body: some View {
        ZStack {
            Color.black.edgesIgnoringSafeArea(.bottom)
            ScrollView(showsIndicators: false) {
                VStack {
                    VStack(spacing: .defaultSpacing) {
                        topBarView
                        Spacer()
                        Image(musicPlayer.nowPlayingSong.imageURLString)
                            .resizable()
                            .padding()
                            .frame(width: 300, height: 300)
                        Spacer()
                        musicInfoView
                        controllerView
                        HStack {
                            Image(systemName: "airplayaudio")
                                .foregroundColor(.gray)
                            Spacer()
                            Image(systemName: "music.note.list")
                                .foregroundColor(.gray)
                        }
                    }.padding(.defaultPadding)
                    //FIXME: 모달 높이 고정값 수정 필요
                    .frame(height: UIScreen.main.bounds.height - 65)
                    Divider().accentColor(.gray)
                    MusicPlayerListView(isPresented: $isPresented)
                }
            }
        }
    }
}

private extension MusicPlayerView {
    var topBarView: some View {
        HStack {
            Button(action: {}, label: {
                Image(systemName: "slider.horizontal.3")
                    .font(.system(size: 20))
                    .foregroundColor(.gray)
            })
            Spacer()
            Text(musicPlayer.nowPlayingSong.title).vibeTitle2().frame(minWidth: 0, maxWidth: .infinity)
            Spacer()
            Button(action: {
                self.isPresented = false
            }, label: {
                Image(systemName: "chevron.down")
                    .font(.system(size: 20))
                    .foregroundColor(.gray)
            })
        }
    }
}

private extension MusicPlayerView {
    var musicInfoView: some View {
        HStack(alignment: .bottom) {
            VStack(alignment: .leading, spacing: .defaultSpacing) {
                Text(musicPlayer.nowPlayingSong.title).vibeTitle2()
                Text(musicPlayer.nowPlayingSong.artist).vibeMainText()
            }
            Spacer()
            Button(action: {}, label: {Image(systemName: "ellipsis").foregroundColor(.gray)})
        }
    }
}

private extension MusicPlayerView {
    var controllerView: some View {
        HStack {
            Group {
                Image(systemName: "repeat")
                    .font(.system(size: 20))
                    .foregroundColor(.gray)
                Spacer()
                Image(systemName: "paperplane")
                    .font(.system(size: 25))
                    .foregroundColor(.gray)
                Spacer()
                Button(action: {
                    musicPlayer.isPlaying.toggle()
                }, label: { Image(systemName: musicPlayer.isPlaying ? "pause" : "play.fill").frame(width: 30, height: 30)})
                Spacer()
                Image(systemName: "heart.fill")
                    .font(.system(size: 25))
                    .foregroundColor(.gray)
                Spacer()
                Image(systemName: "shuffle")
                    .font(.system(size: 20))
                    .foregroundColor(.gray)
            }.vibeTitle1()
            .padding(.vertical)
        }
    }
}

private struct MusicPlayerListView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @Binding var isPresented: Bool
    
    var body: some View {
        LazyVGrid(columns: [.init(.fixed(.oneItemImageWidth))],
                  pinnedViews: [.sectionHeaders]) {
            Section(header:
                        HStack {
                            Image(systemName: "magnifyingglass")
                                .font(.system(size: 20)).foregroundColor(.gray)
                            Spacer()
                            Text("이어지는 노래").vibeTitle2().frame(minWidth: 0, maxWidth: .infinity)
                            Button(action: {
                                self.isPresented = false
                            }, label: {
                                Image(systemName: "chevron.down")
                                    .font(.system(size: 20))
                                    .vibeMainText()
                            })
                        }.padding(.defaultPadding)
                        .background(Color.black)
            ) {
                ForEach(musicPlayer.playingList.indices) { index in
                    PlayListItemView(item: musicPlayer.playingList[index])
                        .background(Color.black)
                        .onTapGesture {
                            musicPlayer.play(index: index)
                        }
                }.onMove(perform: musicPlayer.move)
            }
                  }
    }
}

private struct PlayListItemView: View {
    let item: Song
    var body: some View {
        HStack(spacing: .defaultSpacing) {
            Image(systemName: "circle").foregroundColor(.gray)
            Image(item.imageURLString)
                .resizable()
                // FIXME: 고정값
                .frame(width: 40, height: 40, alignment: .center)
            VStack(alignment: .leading, spacing: .defaultSpacing) {
                Text(item.title).vibeTitle3()
                Text(item.artist).vibeMainText()
            }
            Spacer()
            Image(systemName: "line.horizontal.3").foregroundColor(.gray)
        }
    }
}
