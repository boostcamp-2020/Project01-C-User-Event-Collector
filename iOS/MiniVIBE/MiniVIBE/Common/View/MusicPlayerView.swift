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
            ScrollView {
                VStack {
                    VStack(alignment: .leading, spacing: .defaultSpacing) {
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
                        Spacer()
                        Image(musicPlayer.nowPlayingSong.imageURLString)
                            .resizable()
                            .padding()
                            .frame(width: 300, height: 300)
                        Spacer()
                        Text(musicPlayer.nowPlayingSong.title).vibeTitle2()
                        Text(musicPlayer.nowPlayingSong.artist).vibeMainText()
                        HStack {
                            Group {
                                Image(systemName: "repeat")
                                Spacer()
                                Image(systemName: "paperplane")
                                Spacer()
                                Image(systemName: "play.fill")
                                Spacer()
                                Image(systemName: "heart.fill")
                                Spacer()
                                Image(systemName: "shuffle")
                            }.vibeTitle1()
                            .padding(.vertical)
                        }
                        HStack {
                            Image(systemName: "airplayaudio").vibeTitle2()
                            Spacer()
                            Image(systemName: "music.note.list").vibeTitle2()
                        }
                    }.padding(.defaultPadding)
                    //FIXME: 모달 높이 고정값 수정 필요
                    .frame(height: UIScreen.main.bounds.height - 65)
                    Divider().accentColor(.white) // 나뉘는거 확인용
                    VStack {
                        MusicPlayerListView()
                    }
                }
            }
        }
    }
}

struct MusicPlayerListView: View {
    var body: some View {
        List {
            
        }
    }
}
