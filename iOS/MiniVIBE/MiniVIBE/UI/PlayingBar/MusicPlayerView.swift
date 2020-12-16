//
//  MusicPlayerView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/29.
//

import SwiftUI
import BCEventEmitter

struct MusicPlayerView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @Binding var isPresented: Bool
    
    var body: some View {
        ZStack {
            Color.vibeBackground.ignoresSafeArea(edges: .bottom)
            ScrollView(showsIndicators: false) {
                VStack {
                    VStack(spacing: .defaultSpacing) {
                        topBarView
                        Spacer()
                        AsyncImageView(url: musicPlayer.nowPlayingSong.imageURLString)
                            .padding()
                            .frame(width: 300, height: 300)
                        Spacer()
                        musicInfoView
                        MusicProgressView()
                        controllerView
                        HStack {
                            Image(systemName: "airplayaudio")
                                .foregroundColor(.gray)
                            Spacer()
                            Image(systemName: "music.note.list")
                                .foregroundColor(.gray)
                        }
                    }.padding(.defaultPadding)
                    //FIX ME 고정값 수정
                    .frame(height: UIScreen.main.bounds.height - 65)
                    Divider().accentColor(.gray)
                    MusicPlayerlistView(isPresented: $isPresented)
                }
            }.frame(idealWidth: .infinity)
        }.onAppear {
            emitEvent(event: MoveEvent(next: Self.name, setPrePath: true))
        }
        .onDisappear {
            emitEvent(event: MoveEvent(prev: MoveEvent.path, next: MoveEvent.prePath))
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
            Button(action: {}, label: {
                Image(systemName: "repeat")
                    .font(.system(size: 20))
                    .foregroundColor(.gray)
            }).emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.repeat))
            Spacer()
            Button(action: {}, label: {
                Image(systemName: "paperplane")
                    .font(.system(size: 25))
                    .foregroundColor(.gray)
            }).emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.share))
            Spacer()
            Button(action: {
                musicPlayer.isPlaying.toggle()
            }, label: {
                Image(systemName: musicPlayer.isPlaying ? "pause" : "play.fill") .font(.system(size: 40))
                    .foregroundColor(.vibeTitle)
                    .frame(width: 40, height: 40)
            }).emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.playPause(state: musicPlayer.isPlaying ? "pause" : "play")))
            Spacer()
            Button(action: {}, label: {
                Image(systemName: "heart.fill")
                    .font(.system(size: 25))
                    .foregroundColor(.gray)
            }).emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.like))
            Spacer()
            Button(action: {}, label: {
                Image(systemName: "shuffle")
                    .font(.system(size: 20))
                    .foregroundColor(.gray)
                    .padding(.vertical)
            }).emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.shuffle))
        }
    }
}

private struct MusicPlayerlistView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @Binding var isPresented: Bool
    
    var body: some View {
        LazyVGrid(columns: [.init(.flexible(
        ))],
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
                        .background(Color.vibeBackground)
            ) {
                ForEach(musicPlayer.playinglist.indices) { index in
                    PlayListItemView(item: musicPlayer.playinglist[index])
                        .background(Color.vibeBackground)
                        .onTapGesture {
                            musicPlayer.play(index: index)
                        }
                }.onMove(perform: musicPlayer.move)
            }
        }.padding(.horizontal, .defaultPadding)
    }
}

private struct PlayListItemView: View {
    let item: Song
    var body: some View {
        HStack(spacing: .defaultSpacing) {
            Image(systemName: "circle").foregroundColor(.gray)
            AsyncImageView(url: item.imageURLString)
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

struct MusicProgressView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @State var currentProgress: CGFloat = 0
    
    var body: some View {
        VStack {
            ProgressView(value: currentProgress, total: 50)
                .onReceive(musicPlayer.timer) { _ in
                    self.currentProgress = CGFloat(musicPlayer.currentProgress)
                }
        }.progressViewStyle(VibeProgressViewStyle())
    }
}

struct VibeProgressViewStyle: ProgressViewStyle {
    func makeBody(configuration: Configuration) -> some View {
        ProgressView(configuration)
            .colorScheme(.dark)
            .accentColor(.vibePink)
    }
}
