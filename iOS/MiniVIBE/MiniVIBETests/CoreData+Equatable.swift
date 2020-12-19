//
//  CoreData+Equatable.swift
//  MiniVIBETests
//
//  Created by GH Choi on 2020/12/19.
//

import Foundation
@testable import MiniVIBE

extension CoreDataEvent: Equatable {
    public static func == (lhs: CoreDataEvent, rhs: CoreDataEvent) -> Bool {
        lhs.name == rhs.name && lhs.date == rhs.date && lhs.parameters == lhs.parameters
    }
}
