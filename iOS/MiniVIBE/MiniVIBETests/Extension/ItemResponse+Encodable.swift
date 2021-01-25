//
//  ItemResponse+Encodable.swift
//  MiniVIBETests
//
//  Created by 최동규 on 2020/12/19.
//

@testable import MiniVIBE

extension ItemResponse: Encodable where T == [Magazine] {
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(data, forKey: .data)
    }

    enum CodingKeys: String, CodingKey {
        case data
    }
}

extension Magazine: Encodable {
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(title, forKey: .title)
        try container.encode(imageURLString, forKey: .imageURLString)
        try container.encode(date, forKey: .date)
        try container.encode(tag, forKey: .tag)
        try container.encode(content, forKey: .content)
    }

}
