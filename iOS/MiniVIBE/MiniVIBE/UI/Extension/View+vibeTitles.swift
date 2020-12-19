//
//  View+VibeTitles.swift
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

struct VibeTitle2: ViewModifier {
    let font: Font = Font.title3
        .weight(.bold)
    
    func body(content: Content) -> some View {
        content
        .font(font)
            .foregroundColor(.vibeTitle)
    }
}

struct VibeTitle3: ViewModifier {
    let font: Font = .system(size: 15)
    
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
    
    func vibeTitle2() -> some View {
           modifier(VibeTitle2())
       }
    
    func vibeTitle3() -> some View {
        modifier(VibeTitle3())
    }
}
