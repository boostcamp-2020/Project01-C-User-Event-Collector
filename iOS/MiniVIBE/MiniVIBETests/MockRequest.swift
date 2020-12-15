//
//  MockRequest.swift
//  MiniVIBETests
//
//  Created by 최동규 on 2020/12/01.
//

import Foundation
@testable import MiniVIBE

struct MockRequest: RequestProviding {
    var body: Data?
    var url: URL?
    var method: RequestMethod = .get
    var headers: [String : String]? = nil
}
