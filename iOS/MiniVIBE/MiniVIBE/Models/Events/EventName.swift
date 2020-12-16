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
    public var description: String {
        switch self {
        case .moveEvent:
            return "move_event"
        case .tapEvent:
            return "tap_event"
        case .errorEvent:
            return "error_event"
        }
    }
}
