//
//  Video.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation

struct Video: Identifiable {
    let id = UUID()
    let imageURLString: String
    let title: String
    let artist: String
}
