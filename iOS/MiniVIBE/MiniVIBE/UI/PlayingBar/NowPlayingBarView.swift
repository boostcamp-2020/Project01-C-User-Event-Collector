//
//  NowPlayingBar.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import SwiftUI

struct NowPlayingBarView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @State private var isPresent = false
    static let height: CGFloat = 75
    var body: some View {
        VStack {
            MusicProgressView()
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
                }).emitEventIfTapped(event: TapEvent(component: Self.name, target: Target.playPause(state: musicPlayer.isPlaying ? "pause" : "play")))
                Button(action: {
                    _ = musicPlayer.nextSong()
                }, label: {
                    Image(systemName: "forward.fill").vibeTitle2()
                        .frame(width: 30, height: 30)
                }).padding(.trailing)
            }.onTapGesture {
                self.isPresent = true
            }.sheet(isPresented: $isPresent, content: {
                MusicPlayerView(isPresented: $isPresent)
                    .environmentObject(musicPlayer)
            })
            .padding(.all)
        }
        .frame( height: Self.height)
        .background(Blur())
        .background(Color.vibeBackground.opacity(0.4))
        
    }
}

struct Blur: UIViewRepresentable {
    var style: UIBlurEffect.Style = .systemMaterial
    func makeUIView(context: Context) -> UIVisualEffectView {
        return UIVisualEffectView(effect: UIBlurEffect(style: style))
    }
    func updateUIView(_ uiView: UIVisualEffectView, context: Context) {
        uiView.effect = UIBlurEffect(style: style)
    }
}
