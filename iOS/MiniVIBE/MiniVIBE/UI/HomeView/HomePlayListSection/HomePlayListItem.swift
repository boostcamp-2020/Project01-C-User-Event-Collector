//
//  HomePlayListItem.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import Foundation

struct HomePlayListItem: Identifiable {
    let id = UUID()
    var image: String
    var title: String
    var description: String?
}
