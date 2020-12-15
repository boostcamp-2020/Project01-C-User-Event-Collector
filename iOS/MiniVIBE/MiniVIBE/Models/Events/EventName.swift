//
//  EventName.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/15.
//

import Foundation

public enum EventName: CustomStringConvertible {
    case movePage
    case tabButton
    case error
    public var description: String {
        switch self {
        case .movePage:
            return "move_page"
        case .tabButton:
            return "tap_button"
        case .error:
            return "error"
        }
    }
}
