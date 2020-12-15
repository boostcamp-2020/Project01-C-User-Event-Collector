//
//  Request.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/09.
//

import Foundation

struct ItemRequest: RequestProviding {
    var url: URL?
    var method: RequestMethod = .get
    var headers: [String: String]?
    var body: Data?
}
