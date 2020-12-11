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
    public var description: String {
        switch self {
        case .movePage:
            return "move_page"
        case .tabButton:
            return "tab_Button"
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
        self.id = UUID()
        self.name = cdEvent.name ?? ""
        self.date = cdEvent.date ?? Date()
        
        let cdParameter = cdEvent.parameter ?? NSSet()
        self.parameters = cdParameter.compactMap { setItem -> CDParameter? in
            guard let item = setItem as? CDParameter else { return nil }
            return item
        }.reduce([:], { (dict, pair) -> [String: String]? in
            guard let key = pair.key, let value = pair.value else { return nil }
            guard var parameter = dict else { return nil }
            parameter[key] = value
            return parameter
        })
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

class TapEvent: Event {
    init(view: String, target: Target) {
        super.init(name: .tabButton, parameters: [.view: view, .target: target.description])
    }
    
    required init(from decoder: Decoder) throws {
        fatalError("init(from:) has not been implemented")
    }
}
