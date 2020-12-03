//
//  CGFloat+twoItemImageWidth.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/26.
//

import SwiftUI

extension CGFloat {
    static let twoItemImageWidth: CGFloat =
        (UIScreen.main.bounds.width - (2 * .defaultPadding) - .defaultSpacing) * 0.5
}
