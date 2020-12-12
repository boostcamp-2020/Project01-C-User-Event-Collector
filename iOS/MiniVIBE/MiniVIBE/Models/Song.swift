//
//  Song.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import Foundation
import SwiftUI
struct Song: Identifiable {
    let id = UUID()
    let imageURLString: String
    let title: String
    let artist: String
    let rankChange: String?
    
    init(imageURLString: String, title: String, artist: String, rankChange: String? = nil) {
        self.imageURLString = imageURLString
        self.title = title
        self.artist = artist
        self.rankChange = rankChange
    }
}
