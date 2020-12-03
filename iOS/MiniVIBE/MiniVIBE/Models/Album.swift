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
}
