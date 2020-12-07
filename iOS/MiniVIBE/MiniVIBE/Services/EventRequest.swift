//
//  EventRequest.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import Foundation

struct EventRequest: RequestProviding {
    var url: URL?
    var method: RequestMethod = .post
    var headers: [String: String]?
    func body() throws -> Data? {
        return nil
    }
}
