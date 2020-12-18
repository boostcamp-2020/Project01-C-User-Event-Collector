//
//  MusicPlayer.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import Foundation
import Combine

final class MusicPlayer: ObservableObject {
    @Published var isPlaying = false
    var playingIndex: Int = 0
    @Published var showMembership: Bool = false
    var currentProgress: Float = 0
    var nowPlayingSong: Song {
        return playinglist[playingIndex]
    }
    var subscription: AnyCancellable?
    let timer = Timer.publish(every: 0.1, on: .main, in: .common).autoconnect()
    @Published var playinglist: [Song] = (0...30).map { idx -> Song in
        var rankChange: String?
        var url = "https://musicmeta-phinf.pstatic.net/album/005/134/5134494.jpg?type=r480Fll&v=20201202175909"
        if idx % 4 == 0 {
            rankChange = "up"
        } else if idx % 4 == 1 {
            url = "https://musicmeta-phinf.pstatic.net/album/005/134/5134481.jpg?type=r480Fll&v=20201203110309"
            rankChange = "new"
        } else if idx % 4 == 2 {
            rankChange = "down"
            url = "https://musicmeta-phinf.pstatic.net/album/005/137/5137031.jpg?type=r480Fll&v=20201207114109"
        } else {
            rankChange = nil
        }
        return Song(imageURLString: url,
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
    
    func nextSong() -> Bool {
        guard playingIndex < playinglist.count - 1 else { return false }
        playingIndex += 1
        return true
    }
    
    func move(from source: IndexSet, to destination: Int) {
        playinglist.move(fromOffsets: source, toOffset: destination)
    }
}
