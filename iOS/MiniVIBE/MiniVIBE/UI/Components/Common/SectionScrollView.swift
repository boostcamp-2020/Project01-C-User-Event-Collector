//
//  SectionScrollView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/26.
//

import SwiftUI

struct SectionScrollView<Content: View>: View {
    private let content: Content
    
    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: .defaultSpacing) {
                content
            }
            .padding(.leading, .defaultPadding)
        }
    }
}
