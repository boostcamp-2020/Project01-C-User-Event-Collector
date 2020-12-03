//
//  RequestProviding.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/01.
//

import Foundation

enum RequestError: Error {
    case nilURL
}

extension RequestError: LocalizedError {
    var errorDescription: String? {
        switch self {
        case .nilURL:
            return "URL is nill"
        }
    }
}

enum RequestMethod: String {
    case get = "GET"
    case post = "POST"
    case put = "PUT"
    case delete = "DELETE"
}

protocol RequestProviding {
    var url: URL? { get }
    var method: RequestMethod { get }
    var headers: [String: String]? { get }
    func body() throws -> Data?
    func urlRequest() throws -> URLRequest
}

extension RequestProviding {
    func urlRequest() throws -> URLRequest {
        guard let url = url else {
            throw RequestError.nilURL
        }
        var request = URLRequest(url: url)
        request.httpMethod = method.rawValue
        request.allHTTPHeaderFields = headers
        request.httpBody = try body()
        return request
    }
}
