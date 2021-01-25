//
//  Event+Encodable.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/16.
//

import BCEventEmitter

extension Event: Encodable {
    enum CodingKeys: String, CodingKey {
        case id
        case name = "eventName"
        case parameters
        case date = "eventTime"
    }
    
    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(id, forKey: .id)
        try container.encode(name, forKey: .name)
        try container.encode(parameters, forKey: .parameters)
        try container.encode(date, forKey: .date)
    }
}
