//
//  SummaryItem.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import Foundation

struct SummaryItem: Identifiable {
    let id = UUID()
    let category: String
    let image: String
    let title: String
    let description: String?
    let playlist: Playlist
}
