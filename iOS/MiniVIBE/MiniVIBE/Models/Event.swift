//
//  Event.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/06.
//

import Foundation

class Event: Codable, Identifiable {
    var id = UUID()
    var name: String
    var parameter: [String: String]?
    var date: Date
    
    init(name: String, parameter: [String: String], tab: Int? = nil) {
        self.name = name
        self.date = Date()
//        print(parameter)
        self.parameter = parameter
    }
    
    init(cdEvent: CDEvent) {
        self.date = cdEvent.date
        self.name = cdEvent.eventName
    }
}
