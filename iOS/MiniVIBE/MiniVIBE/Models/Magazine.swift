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
    let date: String? = nil
    let tag: String? = nil
    let content: String? = nil
    
    enum CodingKeys: String, CodingKey {
        case id, title
        case imageURLString = "imgUrl"
        case date, tag, content
    }
}
