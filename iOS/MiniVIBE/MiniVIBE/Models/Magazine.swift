//
//  Magazine.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import Foundation

struct Magazine: Identifiable, Decodable {
    let id: Int
    let title: String
    let imageURLString: String
    var date: String?
    var tag: String?
    var content: String?
    
    enum CodingKeys: String, CodingKey {
        case id, title
        case imageURLString = "imgUrl"
        case date, tag, content
    }
}
