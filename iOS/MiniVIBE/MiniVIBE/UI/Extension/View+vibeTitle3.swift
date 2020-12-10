//
//  View+vibeTitle3.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct VibeTitle3: ViewModifier {
    let font: Font = .system(size: 15)
    
    func body(content: Content) -> some View {
        content
            .font(font)
            .foregroundColor(.white)
    }
}

extension View {
    func vibeTitle3() -> some View {
        modifier(VibeTitle3())
    }
}
