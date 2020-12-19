//
//  MusicEvent.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/19.
//

import BCEventEmitter

class MusicEvent: Event {
    init(action: String, view: String) {
        super.init(name: EventName.musicEvent.description, parameters: [.action: action, .view: view], date: Date().customDateFormat())
    }
}
