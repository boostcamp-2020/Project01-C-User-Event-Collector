//
//  PlayList.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import Foundation

struct Playlist: Identifiable {
    let id: Int
    let imageURLString: String
    let title: String
    let subtitle: String
    let description: String?
    let songs: [Song]
    
    init(id: Int, imageURLString: String, title: String, subtitle: String, songs: [Song], description: String? = nil) {
        self.id = id
        self.imageURLString = imageURLString
        self.title = title
        self.subtitle = subtitle
        self.songs = songs
        self.description = description
    }
}
