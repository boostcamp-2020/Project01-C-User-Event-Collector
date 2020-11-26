//
//  SquareItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/26.
//

import SwiftUI

struct ImageItemView<Content: View>: View {
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
    private let ratio: CGFloat
    
    init(image: Image, type: ContentType, ratio: CGFloat = 1, @ViewBuilder content: () -> Content) {
        self.content = content()
        self.image = image
        self.type = type
        self.ratio = ratio
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            image
                .resizable()
                .frame(width: type.rawValue, height: type.rawValue * ratio,
                       alignment: .center)
                .aspectRatio(contentMode: .fill)
            content
        }.frame(width: type.rawValue)
    }
}
