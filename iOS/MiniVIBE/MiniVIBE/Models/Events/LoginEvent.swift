//
//  LoginEvent.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/19.
//

import BCEventEmitter

class LoginEvent: Event {
    init() {
        super.init(name: EventName.loginEvent.description, parameters: [:], date: Date().customDateFormat())
    }
}

class LogoutEvent: Event {
    init() {
        super.init(name: EventName.logoutEvent.description, parameters: [:], date: Date().customDateFormat())
    }
}
