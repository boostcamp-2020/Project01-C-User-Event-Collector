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
    public var description: String {
        switch self {
        case .movePage:
        return "move_page"
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

    init(name: EventName, parameters: [String: String]) {
        self.name = name.description
        self.date = Date()
        self.id = UUID()
        self.parameters = parameters
    }
    
    init(cdEvent: CDEvent) {
        self.date = cdEvent.date
        self.name = cdEvent.name
        self.id = UUID()
        self.parameters = [:]
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
        super.init(name: .movePage, parameters: [.preView: prev, .nextView: next])
        if setPath {
            Self.path = next
        }
        if setPrePath {
            Self.prePath = prev
        }
    }
    
    required init(from decoder: Decoder) throws {
        fatalError("init(from:) has not been implemented")
    }
}
