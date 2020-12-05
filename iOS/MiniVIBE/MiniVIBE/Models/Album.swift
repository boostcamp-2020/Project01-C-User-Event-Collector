//
//  Album.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import Foundation

struct Album: Identifiable {
    let id = UUID()
    let imageURLString: String
    let title: String
    let artist: String
    let songs: [Song]
    let rankChange: String?
    
    init(imageURLString: String, title: String, artist: String, songs: [Song], rankChange: String? = nil) {
        self.imageURLString = imageURLString
        self.title = title
        self.artist = artist
        self.songs = songs
        self.rankChange = rankChange
    }
}
