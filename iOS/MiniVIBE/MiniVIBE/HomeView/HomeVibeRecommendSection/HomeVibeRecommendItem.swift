//
//  HomeVibeRecommendItem.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/25.
//

import Foundation

struct HomeVibeRecommendItem: Identifiable {
    let id = UUID()
    var image: String
    var title: String
    var subtitle: String?
    var description: String?
}
