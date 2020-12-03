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
                            Image(systemName: "airplayaudio").vibeTitle2()
                            Spacer()
                            Image(systemName: "music.note.list").vibeTitle2()
                        }
                    }.padding(.defaultPadding)
                    //FIXME: 모달 높이 고정값 수정 필요
                    .frame(height: UIScreen.main.bounds.height - 65)
                    Divider().accentColor(.white)
                    VStack {
                        HStack {
                            Image(systemName: "magnifyingglass").vibeTitle1()
                            Spacer()
                            Text("이어지는 노래").vibeTitle2()
                            Spacer()
                            Button(action: {
                                self.isPresented = false
                            }, label: {
                                Image(systemName: "chevron.down")
                                    .padding(.trailing)
                                    .vibeTitle1()
                            })
                        }.padding(.horizontal, .defaultPadding)
                        MusicPlayerListView()
                    }.frame(height: UIScreen.main.bounds.height - 100)
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
                    .vibeTitle1()
            })
            Spacer()
            Text(musicPlayer.nowPlayingSong.title).vibeTitle2()
            Spacer()
            Button(action: {
                self.isPresented = false
            }, label: {
                Image(systemName: "chevron.down")
                    .padding(.trailing)
                    .vibeTitle1()
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
            Button(action: {}, label: {Image(systemName: "ellipsis").vibeTitle2()})
        }
    }
}

private extension MusicPlayerView {
    var controllerView: some View {
        HStack {
            Group {
                Image(systemName: "repeat")
                Spacer()
                Image(systemName: "paperplane")
                Spacer()
                Button(action: {
                    musicPlayer.isPlaying.toggle()
                }, label: { Image(systemName: musicPlayer.isPlaying ? "pause" : "play.fill")})
                Spacer()
                Image(systemName: "heart.fill")
                Spacer()
                Image(systemName: "shuffle")
            }.vibeTitle1()
            .padding(.vertical)
        }
    }
}

private struct MusicPlayerListView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    
    init() {
        UITableView.appearance().backgroundColor = UIColor.clear
    }
    
    var body: some View {
        List {
            ForEach(musicPlayer.playingList.indices) { index in
                PlayListItemView(item: musicPlayer.playingList[index])
                    .background(Color.black)
                    .onTapGesture {
                        musicPlayer.play(index: index)
                    }
            }.onMove(perform: musicPlayer.move)
            .listRowBackground(Color.black)
        }
    }
}

private struct PlayListItemView: View {
    let item: Song
    var body: some View {
        HStack {
            Image(item.imageURLString)
                .resizable()
                // FIXME: 고정값
                .frame(width: 100, height: 100, alignment: .center)
            VStack(alignment: .leading, spacing: .defaultSpacing) {
                Text(item.title).vibeTitle3()
                Text(item.artist).vibeMainText()
            }
            Spacer()
        }.padding(.horizontal, .defaultPadding)
    }
}
