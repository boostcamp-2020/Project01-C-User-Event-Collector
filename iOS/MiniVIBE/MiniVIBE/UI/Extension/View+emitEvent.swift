//
//  View+emitEvent.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/05.
//

import SwiftUI
import Combine

extension View {
    func emitEvent(eventService: EventService, eventName: String, parameter: [String: String]) -> some View {
        return self.simultaneousGesture(
            TapGesture()
                .onEnded { _ in
                    eventService.sendOneEvent(event: Event(name: eventName, parameter: parameter))
                })
    }
}
