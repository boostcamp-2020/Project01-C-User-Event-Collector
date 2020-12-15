//
//  MoveEvent.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/15.
//

import BCEventEmitter

class MoveEvent: Event {
    static private(set) var path = "Start"
    static private(set) var prePath = "Start"
    init(prev: String = MoveEvent.path, next: String, setPath: Bool = true, setPrePath: Bool = false) {
        super.init(name: EventName.movePage.description, parameters: [.preView: prev, .nextView: next])
        if setPath {
            Self.path = next
        }
        if setPrePath {
            Self.prePath = prev
        }
    }
    
    required init(from decoder: Decoder) throws {
        emitEvent(event: ErrorEvent(from: "MoveEvent required init", reason: "init(from:) has not been implemented"))
        try super.init(from: decoder)
        fatalError("init(from:) has not been implemented")
    }
}
