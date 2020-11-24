//
//  HomeNewAlbumItem.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import Foundation

struct HomeNewAlbumItem: Identifiable {
    let id = UUID()
    var albumArt: String
    var title: String
    var artist: String
}
