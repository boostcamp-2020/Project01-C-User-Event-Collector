//
//  CGFloat+ImageWidths.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/26.
//

import SwiftUI

extension CGFloat {
    static private(set) var largeItemImageWidth: CGFloat =
        CGFloat.flexibleWidth(minimum: .largeItemImageMinWidth, maximum: .largeItemImageMaxWidth)

    static private(set) var normalItemImageWidth: CGFloat =
        CGFloat.flexibleWidth(minimum: .itemImageMinWidth, maximum: .itemImageMaxWidth)

    static let largeItemImageMinWidth: CGFloat = 300
    static let largeItemImageMaxWidth: CGFloat = 400
    static let itemImageMinWidth: CGFloat = 150
    static let itemImageMaxWidth: CGFloat = 200
    static var musicPlayingBarWidth: CGFloat {
        if UIDevice.current.userInterfaceIdiom == .pad {
            return .largeItemImageWidth
        }
        return UIScreen.main.bounds.width
    }
    
    static private(set) var baseWidth: CGFloat = 0
    
    static func setBaseWidth(value: CGFloat) {
        Self.baseWidth = value
        Self.largeItemImageWidth = CGFloat.flexibleWidth(minimum: .largeItemImageMinWidth, maximum: .largeItemImageMaxWidth)
        Self.normalItemImageWidth =  CGFloat.flexibleWidth(minimum: .itemImageMinWidth, maximum: .itemImageMaxWidth)
    }
    
    static func flexibleWidth(minimum: CGFloat, maximum: CGFloat, baseWidth: CGFloat = Self.baseWidth ) -> CGFloat {
        var width: CGFloat = -1
        for count in (1..<15) {
            let calWidth: CGFloat = (baseWidth - (CGFloat(count - 1) * .defaultSpacing) - (2 * .defaultPadding)) / CGFloat(count)
            if (minimum...maximum).contains(calWidth) {
                width = calWidth
            } else if minimum > calWidth {
                if width == -1 {
                    width = calWidth
                }
                break
            }
        }
        return width
    }
}
