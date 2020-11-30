//
//  Song.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import Foundation

class Song: Identifiable {
    let id = UUID()
    let imageURLString: String
    let title: String
    let artist: String
    
    init(image: String, title: String, artist: String) {
        self.imageURLString = image
        self.title = title
        self.artist = artist
    }
}
