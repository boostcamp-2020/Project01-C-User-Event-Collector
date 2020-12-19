//
//  Event+Equatable.swift
//  MiniVIBETests
//
//  Created by 최동규 on 2020/12/19.
//

import BCEventEmitter

extension Event: Equatable {
    public static func == (lhs: Event, rhs: Event) -> Bool {
        return lhs.date == rhs.date &&
            lhs.name == rhs.name &&
            lhs.parameters == rhs.parameters
    }
}
