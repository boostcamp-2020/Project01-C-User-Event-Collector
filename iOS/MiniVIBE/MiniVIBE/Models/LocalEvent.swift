//
//  LocalEvent.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import Foundation

struct LocalEvent: Codable, Identifiable {
    var id: UUID = UUID()
    let log: String
}
