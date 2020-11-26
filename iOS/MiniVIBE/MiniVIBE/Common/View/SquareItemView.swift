//
//  SquareItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/26.
//

import SwiftUI

struct SquareItemView<Content: View>: View {
    enum ContentType: CGFloat {
        case one
        case two
        
        var rawValue: CGFloat {
            switch self {
            case .one:
                return .oneItemImageWidth
            case .two:
                return .twoItemImageWidth
            }
        }
    }
    
    private let content: Content
    private let image: Image
    private let type: ContentType
    
    init(image: Image, type: ContentType, @ViewBuilder content: () -> Content) {
        self.content = content()
        self.image = image
        self.type = type
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            image
                .resizable()
                .frame(width: type.rawValue, height: type.rawValue,
                       alignment: .center)
                .aspectRatio(contentMode: .fill)
            content
        }.frame(width: type.rawValue)
    }
}
