//
//  View+VibeMainText.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct VibeMainText: ViewModifier {
    let font: Font = .system(size: 14)
    
    func body(content: Content) -> some View {
        content
        .font(font)
        .foregroundColor(.gray)
    }
}

extension View {
    func vibeMainText() -> some View {
           modifier(VibeMainText())
       }
}
