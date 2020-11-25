//
//  HomePlayListSectionItem.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import Foundation

struct HomePlayListSectionItem: Identifiable {
    let id = UUID()
    var title: String
    var image: String
    var description: String?
}
