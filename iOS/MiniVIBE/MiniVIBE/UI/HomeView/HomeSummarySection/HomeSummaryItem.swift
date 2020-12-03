//
//  HomeSummaryItem.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import Foundation

struct HomeSummaryItem: Identifiable {
    let id = UUID()
    var category: String
    var image: String
    var title: String
    var description: String?
}
