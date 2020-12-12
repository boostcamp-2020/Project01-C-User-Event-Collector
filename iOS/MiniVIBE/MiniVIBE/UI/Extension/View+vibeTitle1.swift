//
//  View+VibeTitle1.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct VibeTitle1: ViewModifier {
    let font: Font = Font.largeTitle
        .weight(.heavy)
    
    func body(content: Content) -> some View {
        content
        .font(font)
        .foregroundColor(.vibeTitle)
    }
}

extension View {
    func vibeTitle1() -> some View {
           modifier(VibeTitle1())
       }
}
