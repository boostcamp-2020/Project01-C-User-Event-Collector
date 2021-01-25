//
//  EventName.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/15.
//

import Foundation

public enum EventName: CustomStringConvertible {
    case moveEvent
    case tapEvent
    case errorEvent
    case libraryEvent
    case loginEvent
    case logoutEvent
    case musicEvent
    
    public var description: String {
        switch self {
        case .moveEvent:
            return "move_event"
        case .tapEvent:
            return "tap_event"
        case .errorEvent:
            return "error_event"
        case .libraryEvent:
            return "library_event"
        case .loginEvent:
            return "login_event"
        case .logoutEvent:
            return "logout_event"
        case .musicEvent:
            return "music_event"
        }
    }
}
