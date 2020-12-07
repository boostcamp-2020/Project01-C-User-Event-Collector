//
//  PlayList.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import Foundation

struct Playlist: Identifiable {
    let id = UUID()
    let imageURLString: String
    let title: String
    let subtitle: String
    let description: String?
    let songs: [Song]
    
    init(imageURLString: String, title: String, subtitle: String, songs: [Song], description: String? = nil) {
        self.imageURLString = imageURLString
        self.title = title
        self.subtitle = subtitle
        self.songs = songs
        self.description = description
    }
}
