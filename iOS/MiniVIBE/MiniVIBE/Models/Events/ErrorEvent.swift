//
//  MoveEvent.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/15.
//

import BCEventEmitter

class ErrorEvent: Event {
    init(from: String, reason: String) {
        super.init(name: EventName.error.description, parameters: [.from: from, .reason: reason])
    }
    
    required init(from decoder: Decoder) throws {
        emitEvent(event: ErrorEvent(from: "ErrorEvent required init", reason: "init(from:) has not been implemented"))
        fatalError("init(from:) has not been implemented")
    }
}
