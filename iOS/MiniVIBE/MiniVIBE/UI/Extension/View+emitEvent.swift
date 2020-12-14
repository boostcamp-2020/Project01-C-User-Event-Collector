//
//  View+emitEvent.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/05.
//

import SwiftUI
import Combine

extension View {
    func emitEventIfTapped(event: Event) -> some View {
        return self.simultaneousGesture(
            TapGesture()
                .onEnded { _ in
                    EventSendManager.shared.eventHandler(event)
                })
    }
}

public func emitEvent(event: Event) {
    EventSendManager.shared.eventHandler(event)
}

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

final class EventSendManager {
    static let shared = EventSendManager()
    private(set) var eventHandler: ((_ event: Event) -> Void) = { _ in }
    
    private init() {}
    
    func setEventHandler(eventHandler: @escaping ((_ event: Event) -> Void)) {
        self.eventHandler = eventHandler
    }
}

public class Event: Codable, Identifiable {
    public let id: UUID
    let name: String
    let parameters: [String: String]?
    let date: Date

    init(name: String, parameters: [String: String]) {
        self.name = name.description
        self.date = Date()
        self.id = UUID()
        self.parameters = parameters
    }
    
}

class CoreDataEvent: Event {
    init(cdEvent: CDEvent) {
        let cdParameter = cdEvent.parameter ?? NSSet()
        let parameters = cdParameter.compactMap { setItem -> CDParameter? in
            guard let item = setItem as? CDParameter else { return nil }
            return item
        }.reduce([:], { (dict, pair) -> [String: String]? in
            guard let key = pair.key, let value = pair.value else { return nil }
            guard var parameter = dict else { return nil }
            parameter[key] = value
            return parameter
        })
        super.init(name: cdEvent.name ?? "", parameters: parameters ?? [:])
    }
    
    init(name: String, parameter: [String: String]){
        super.init(name: name, parameters: parameter)
    }
    
    required init(from decoder: Decoder) throws {
        fatalError("init(from:) has not been implemented")
    }
}

extension View {
    static var name: String {
        String(describing: Self.self)
    }
}

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

class TapEvent: Event {
    init(component: String, target: Target) {
        super.init(name: EventName.tabButton.description, parameters: [.component: component, .target: target.description])
    }
    
    required init(from decoder: Decoder) throws {
        emitEvent(event: ErrorEvent(from: "TapEvent required init", reason: "init(from:) has not been implemented"))
        fatalError("init(from:) has not been implemented")

    }
}

class ErrorEvent: Event {
    init(from: String, reason: String) {
        super.init(name: EventName.error.description, parameters: [.from: from, .reason: reason])
    }
    
    required init(from decoder: Decoder) throws {
        emitEvent(event: ErrorEvent(from: "ErrorEvent required init", reason: "init(from:) has not been implemented"))
        fatalError("init(from:) has not been implemented")
    }
}

enum Target: CustomStringConvertible {
    case login
    case song
    case playlist
    case album
    case more
    case like
    case playPause(state: String)
    case next
    case share
    case `repeat`
    case shuffle
    case custom(String)
    
    var description: String {
        switch self {
        case .login:
            return "login"
        case .song:
            return "song"
        case .playlist:
            return "playlist"
        case .album:
            return "album"
        case .more:
            return "more"
        case .like:
            return "like"
        case let .playPause(state):
            return state
        case .next:
            return  "next"
        case .repeat:
            return "repeat"
        case .share:
            return "share"
        case .shuffle:
            return "shuffle"
        case let .custom(reason):
            return reason
        }
    }
}
