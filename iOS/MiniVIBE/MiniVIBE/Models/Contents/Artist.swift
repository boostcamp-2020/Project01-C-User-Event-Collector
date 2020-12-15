//
//  Artist.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/08.
//

import Foundation

class Artist: Identifiable, Decodable {
    let id: Int
    let imageURLString: String
    let debut: String
    let name: String
    
    enum CodingKeys: String, CodingKey {
        case id, name, debut
        case imageURLString = "imgUrl"
    }
    
    init(id: Int, imageURLString: String, name: String, debut: String) {
        self.id = id
        self.imageURLString = imageURLString
        self.name = name
        self.debut = debut
    }
}
