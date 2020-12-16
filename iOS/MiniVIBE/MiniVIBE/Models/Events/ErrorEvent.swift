//
//  MoveEvent.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/15.
//

import BCEventEmitter

class ErrorEvent: Event {
    init(from: String, reason: String) {
        super.init(name: EventName.error.description, parameters: [.from: from, .reason: reason], date: Date().customDateFormat())
    }
}
