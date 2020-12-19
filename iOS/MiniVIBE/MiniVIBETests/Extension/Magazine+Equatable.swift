//
//  Magazine+Equatable.swift
//  MiniVIBETests
//
//  Created by 최동규 on 2020/12/19.
//

@testable import MiniVIBE

extension Magazine: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.content == rhs.content &&
            lhs.date == rhs.date &&
            lhs.imageURLString == rhs.imageURLString &&
            lhs.tag == rhs.tag &&
            lhs.title == rhs.title &&
            lhs.id == rhs.id
    }
}
