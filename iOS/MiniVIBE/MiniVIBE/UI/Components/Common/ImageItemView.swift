//
//  SquareItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/26.
//

import SwiftUI

enum ImageSizeType: CGFloat {
    case large
    case normal
    
    var rawValue: CGFloat {
        switch self {
        case .large:
            return .largeItemImageWidth
        case .normal:
            return .normalItemImageWidth
        }
    }
}

struct ImageItemView<Content: View>: View {
    
    private let content: Content
    private let image: Image?
    private let ratio: CGFloat
    private let imageURLString: String?
    private let width: CGFloat
    
    init(image: Image, width: CGFloat, ratio: CGFloat = 1, @ViewBuilder content: () -> Content) {
        self.content = content()
        self.imageURLString = nil
        self.image = image
        self.width = width
        self.ratio = ratio
    }
    
    init(url: String, width: CGFloat, ratio: CGFloat = 1, @ViewBuilder content: () -> Content) {
        self.content = content()
        self.imageURLString = url
        self.image = nil
        self.width = width
        self.ratio = ratio
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            if let imageURLString = imageURLString {
                AsyncImageView(url: imageURLString)
                    .frame(width: width, height: width * ratio,
                           alignment: .center)
                    .aspectRatio(contentMode: .fill)
                    .clipped()
            } else if let image = image {
                image
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(width: width, height: width * ratio,
                           alignment: .center)
                    .clipped()
            }
            content
        }.frame(width: width)
    }
}
