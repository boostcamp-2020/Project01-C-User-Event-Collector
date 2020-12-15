//
//  CGFloat+ImageWidths.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/26.
//

import SwiftUI

extension CGFloat {
    static let largeItemImageWidth: CGFloat = CGFloat.flexibleWidth(minimum: .largeItemImageMinWidth, maximum: .largeItemImageMaxWidth)
    static let normalItemImageWidth: CGFloat = CGFloat.flexibleWidth(minimum: .itemImageMinWidth, maximum: .itemImageMaxWidth)
    static let largeItemImageMinWidth: CGFloat = 300
    static let largeItemImageMaxWidth: CGFloat = 400
    static var itemImageMinWidth: CGFloat = 150
    static var itemImageMaxWidth: CGFloat = 200
    static var musicPlayingBarWidth: CGFloat {
        if UIDevice.current.userInterfaceIdiom == .pad {
            return .largeItemImageWidth
        }
        return UIScreen.main.bounds.width
    }
    static func flexibleWidth(minimum: CGFloat, maximum: CGFloat) -> CGFloat {
        var width: CGFloat = -1
        for count in (1..<15) {
            let calWidth: CGFloat = (UIScreen.main.bounds.width - (CGFloat(count - 1) * .defaultSpacing) - (2 * .defaultPadding)) / CGFloat(count)
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
