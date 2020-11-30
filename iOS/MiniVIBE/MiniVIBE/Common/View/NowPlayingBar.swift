//
//  NowPlayingBar.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import SwiftUI

struct NowPlayingBar: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @State private var isPresent = false
    var body: some View {
        HStack {
            Image(musicPlayer.nowPlayingSong.imageURLString)
                .resizable()
                .frame(width: 40, height: 40)
            VStack {
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
                    .buttonStyle(PlainButtonStyle())
                    .padding(.horizontal)
            })
            Button(action: {
                musicPlayer.nextSong()
            }, label: {
                Image(systemName: "forward.fill").vibeTitle2()
            }).padding(.trailing)
        }.onTapGesture {
            self.isPresent = true
        }.sheet(isPresented: $isPresent, content: {
            MusicPlayerView(isPresented: $isPresent)
        })
        .padding(.all)
        .background(Color.black.opacity(0.9))
    }
}
