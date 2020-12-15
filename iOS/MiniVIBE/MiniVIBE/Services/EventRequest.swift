//
//  EventRequest.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import Foundation

struct EventRequest: RequestProviding {
    var url: URL? = URL(string: "http://115.85.181.152:8000/api/log")
    var method: RequestMethod = .post
    var headers: [String: String]?
    var body: Data?
}

struct FailureEventRequest: RequestProviding {
    var url: URL?
    var method: RequestMethod = .post
    var headers: [String: String]?
    var body: Data?
}
