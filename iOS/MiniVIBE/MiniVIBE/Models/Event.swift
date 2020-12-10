//
//  Event.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/06.
//

import Foundation
import CoreData

class Event: Codable, Identifiable {
    var id = UUID()
    var name: String?
    var parameter: [String: String]?
    var date: Date?
    
    init(name: String, parameter: [String: String]? = nil) {
        self.name = name
        self.date = Date()
        self.parameter = parameter
    }
    
    init(cdEvent: CDEvent) {
        self.name = cdEvent.name
        self.date = cdEvent.date
        
        let cdParameter = cdEvent.parameter ?? NSSet()
        let parameter: [String: String]? = cdParameter.compactMap { setItem -> CDParameter? in
            guard let item = setItem as? CDParameter else { return nil }
            return item
        }.reduce([:], { (dict, pair) -> [String: String]? in
            guard let key = pair.key, let value = pair.value else { return nil }
            guard var parameter = dict else { return nil }
            parameter[key] = value
            return parameter
        })
        self.parameter = parameter
    }
}
