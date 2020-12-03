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
    @Published var playingList: [Song] = [
        Song(imageURLString: "newAlbum-dummy1", title: "앨범1", artist: "가수1"),
        Song(imageURLString: "newAlbum-dummy2", title: "앨범2", artist: "가수2"),
        Song(imageURLString: "newAlbum-dummy3", title: "앨범3", artist: "가수3")
    ]
    
    init(playingIndex: Int = 0) {
        self.playingIndex = playingIndex
    }
    
    func play(index: Int) {
        guard (0...playingList.count-1).contains(index) else { return }
        playingIndex = index
        isPlaying = true
    }
    
    func nextSong() {
        guard playingIndex < playingList.count - 1 else { return }
        playingIndex += 1
    }
    
    func move(from source: IndexSet, to destination: Int) {
        playingList.move(fromOffsets: source, toOffset: destination)
    }
}
