//
//  NowPlayingBar.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import SwiftUI
import BCEventEmitter

struct NowPlayingBarView: View {
//    @EnvironmentObject var musicPlayer: MusicPlayer
    @State private var isPresent = false
    @ObservedObject var musicPlayer: MusicPlayer
    @Environment(\.colorScheme) var colorScheme
    static let height: CGFloat = 75
    var body: some View {
        VStack {
            Spacer()
            HStack {
                if UIDevice.current.userInterfaceIdiom == .pad {
                    Spacer()
                }
                VStack {
                    if musicPlayer.showMembership {
                        membershipView
                    }
                    VStack {
                        MusicProgressView()
                        nowPlayingBarView
                            .onTapGesture {
                                self.isPresent = true
                            }.sheet(isPresented: $isPresent, content: {
                                MusicPlayerView(isPresented: $isPresent)
                                    .environmentObject(musicPlayer)
                                    .preferredColorScheme(colorScheme)
                            })
                            .padding(.all)
                    }
                    .frame(width: .musicPlayingBarWidth, height: Self.height).background(Blur())
                }
            }
        }
    }
}

private extension NowPlayingBarView {
    var nowPlayingBarView: some View {
        HStack {
            AsyncImageView(url: musicPlayer.nowPlayingSong.imageURLString)
                .frame(width: 40, height: 40)
            VStack(alignment: .leading) {
                Text(musicPlayer.nowPlayingSong.title)
                    .vibeTitle3()
                    .lineLimit(1)
                Text(musicPlayer.nowPlayingSong.artist)
                    .vibeMainText()
                    .lineLimit(1)
            }.padding(.leading)
            Spacer()
            Button(action: {
                musicPlayer.isPlaying.toggle()
            }, label: {
                Image(systemName: musicPlayer.isPlaying ? "pause" : "play.fill")
                    .vibeTitle2()
                    .frame(width: 30, height: 30)
                    .buttonStyle(PlainButtonStyle())
                    .padding(.horizontal)
            }).emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.playPause(state: musicPlayer.isPlaying ? "pause" : "play")))
            Button(action: {
                _ = musicPlayer.nextSong()
            }, label: {
                Image(systemName: "forward.fill").vibeTitle2()
                    .frame(width: 30, height: 30)
            }).padding(.trailing)
        }
    }
}

private extension NowPlayingBarView {
    var membershipView: some View {
        HStack(alignment: .top) {
            VStack(alignment: .leading, spacing: .defaultSpacing) {
                HStack {
                    Image(systemName: "info.circle.fill")
                    Text("1분 미리듣기")
                }.font(.system(size: 13, weight: .bold))
                Text("다양한 할인 혜택으로 멤버십 구독 후 전체 곡을 재생해 보세요.").font(.system(size: 11, weight: .semibold))
            }
            Spacer()
            Button(action: { withAnimation { musicPlayer.showMembership = false
                emitEvent(event: TapEvent(component: "membershipView", target: .custom("close")))
            } }, label: {Image(systemName: "xmark")})
        }
        .foregroundColor(.white)
        .padding(10)
        .frame(width: .largeItemImageWidth, height: 60)
        .background(LinearGradient(gradient: Gradient(colors: [.red, .vibePink, .purple]), startPoint: .leading, endPoint: .trailing))
        .cornerRadius(5)
        .onTapGesture {
            withAnimation { musicPlayer.showMembership = false
                emitEvent(event: TapEvent(component: "membershipView", target: .custom("membership purchase")))
            }
        }
    }
}
