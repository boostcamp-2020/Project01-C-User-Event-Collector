//
//  Artist.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/08.
//

import Foundation

class Artist: Identifiable {
    let id = UUID()
    let imageURLString: String
    let name: String
    
    init(imageURLString: String, name: String) {
        self.imageURLString = imageURLString
        self.name = name
    }
}
