//
//  ItemResponse.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/09.
//

import Foundation

public struct ItemResponse<T: Decodable>: Decodable {
    let data: T
}
