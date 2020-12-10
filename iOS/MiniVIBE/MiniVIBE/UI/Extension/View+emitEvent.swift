//
//  View+emitEvent.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/05.
//

import SwiftUI
import Combine

extension View {
    func emitEventIfTapped(eventName: EventName, parameter: [String: String]) -> some View {
        return self.simultaneousGesture(
            TapGesture()
                .onEnded { _ in
                    EventSendManager.shared.eventHandler(Event(name: eventName.rawValue, parameter: parameter))
                })
    }
}

public func emitEvent(eventName: EventName, parameter: [String: String]) {
    EventSendManager.shared.eventHandler(Event(name: eventName.rawValue, parameter: parameter))
}

public enum EventName: String {
    case movePage = "move_page"
}

final class EventSendManager {
    static let shared = EventSendManager()
    private(set) var eventHandler: ((_ event: Event) -> Void) = { _ in }
    
    private init() {}
    
    func setEventHandler(eventHandler: @escaping ((_ event: Event) -> Void)) {
        self.eventHandler = eventHandler
    }
}

extension Dictionary where Key == String {
    static func connected(prev: String, next: String) -> [String: String] {
        return [.preView: prev, .nextView: "\(prev)/\(next)"]
    }
    
    static func `default`(prev: String, next: String) -> [String: String] {
        return [.preView: prev, .nextView: next]
    }
}

struct EmitMovePageEventIfisNavigationStack: ViewModifier {
    let prev: String
    let next: String
    
    func body(content: Content) -> some View {
        content
            .onAppear {
                emitEvent(eventName: .movePage, parameter: .connected(prev: prev, next: next))}
            .onDisappear {
                emitEvent(eventName: .movePage, parameter: .default(prev: next, next: prev))}
    }
}

extension View {
    func emitMovePageEventNavigationStack(prev: String, next: String) -> some View {
        modifier(EmitMovePageEventIfisNavigationStack(prev: prev, next: next))
    }
}
