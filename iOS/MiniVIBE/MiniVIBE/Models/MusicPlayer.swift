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
        return playinglist[playingIndex]
    }
    @Published var playinglist: [Song] = (0...30).map { idx -> Song in
        var rankChange: String?
        if idx % 4 == 0 {
            rankChange = "up"
        } else if idx % 4 == 1 {
            rankChange = "new"
        } else if idx % 4 == 2 {
            rankChange = "down"
        } else {
            rankChange = nil
        }
        return Song(imageURLString: "HomeDJStationSection1",
                    title: "Test Music\(idx)", artist: "dochoi", rankChange: rankChange)
    }
    
    init(playingIndex: Int = 0) {
        self.playingIndex = playingIndex
    }
    
    func play(index: Int) {
        guard (0...playinglist.count-1).contains(index) else { return }
        playingIndex = index
        isPlaying = true
    }
    
    func nextSong() {
        guard playingIndex < playinglist.count - 1 else { return }
        playingIndex += 1
    }
    
    func move(from source: IndexSet, to destination: Int) {
        playinglist.move(fromOffsets: source, toOffset: destination)
    }
}
