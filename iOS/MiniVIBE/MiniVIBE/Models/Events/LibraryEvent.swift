//
//  LibraryEvent.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/19.
//

import BCEventEmitter

class LibraryEvent: Event {
    init(action: String, type: String, id: String) {
        super.init(name: EventName.libraryEvent.description, parameters: [.action: action, .type: type, .id: id], date: Date().customDateFormat())
    }
}
