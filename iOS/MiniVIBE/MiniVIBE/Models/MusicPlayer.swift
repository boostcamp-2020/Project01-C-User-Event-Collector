//
//  MusicPlayer.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import Foundation

class MusicPlayer: ObservableObject {
    @Published var isPlaying = false
    @Published var playingIndex: Int = 0
    var nowPlayingSong: Song {
        return playingList[playingIndex]
    }
    var playingList: [Song] = [
        Song(image: "newAlbum-dummy1", title: "앨범1", artist: "가수1"),
        Song(image: "newAlbum-dummy2", title: "앨범2", artist: "가수2"),
        Song(image: "newAlbum-dummy3", title: "앨범3", artist: "가수3")
    ]
    
    init(playingIndex: Int = 0) {
        self.playingIndex = playingIndex
    }
    
    func nextSong() {
        guard playingIndex < playingList.count - 1 else { return }
        playingIndex += 1
    }
}
