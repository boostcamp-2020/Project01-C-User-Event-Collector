//
//  View+name.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/05.
//

import SwiftUI

extension View {
    static var name: String {
        String(describing: Self.self)
    }
}
