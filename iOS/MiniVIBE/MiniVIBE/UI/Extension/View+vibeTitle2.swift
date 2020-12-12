//
//  View+VibeTitle2.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct VibeTitle2: ViewModifier {
    let font: Font = Font.title3
        .weight(.bold)
    
    func body(content: Content) -> some View {
        content
        .font(font)
            .foregroundColor(.vibeTitle)
    }
}

extension View {
    func vibeTitle2() -> some View {
           modifier(VibeTitle2())
       }
}
