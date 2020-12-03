//
//  Networking.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/01.
//

import Foundation
import Combine

typealias HTTPCode = Int

enum NetworkError: Error {
    case requestProvider(reason: String)
    case httpCode(HTTPCode)
    case unexpectedResponse
    case networkError(reason: String)
}

extension NetworkError: LocalizedError {
    var errorDescription: String? {
        switch self {
        case let .requestProvider(reason):
            return reason
        case let .httpCode(code):
            return "Unexpected HTTP code: \(code)"
        case .unexpectedResponse:
            return "Unexpected response from the server"
        case let .networkError(reason):
            return reason
        }
    }
}

protocol Networking {
    func execute(_ requestProvider: RequestProviding) -> AnyPublisher<Data, NetworkError>
}
