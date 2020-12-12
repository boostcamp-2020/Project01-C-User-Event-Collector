//
//  SquareItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/26.
//

import SwiftUI

enum ImageSizeType: CGFloat {
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

struct ImageItemView<Content: View>: View {
    
    private let content: Content
    private let image: Image?
    private let type: ImageSizeType
    private let ratio: CGFloat
    private let imageURLString: String?
    
    init(image: Image, type: ImageSizeType, ratio: CGFloat = 1, @ViewBuilder content: () -> Content) {
        self.content = content()
        self.image = image
        self.imageURLString = nil
        self.type = type
        self.ratio = ratio
    }
    
    init(url: String, type: ImageSizeType, ratio: CGFloat = 1, @ViewBuilder content: () -> Content) {
        self.content = content()
        self.imageURLString = url
        self.image = nil
        self.type = type
        self.ratio = ratio
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            if let imageURLString = imageURLString {
                AsyncImageView(url: imageURLString)
                    .frame(width: type.rawValue, height: type.rawValue * ratio,
                           alignment: .center)
                    .aspectRatio(contentMode: .fill)
                    .clipped()
            } else if let image = image {
                image
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(width: type.rawValue, height: type.rawValue * ratio,
                           alignment: .center)
                    .clipped()
            }

            content
        }.frame(width: type.rawValue)
    }
}
