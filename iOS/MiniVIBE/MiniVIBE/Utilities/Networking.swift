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
    case nilURL
    case httpCode(HTTPCode)
    case unexpectedResponse
    case networkError(reason: String)
}

extension NetworkError: LocalizedError {
    var errorDescription: String? {
        switch self {
        case .nilURL:
            return "URL is Nil"
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

final class Network: Networking {
    private let session: URLSession
    
    init(session: URLSession = .shared) {
        self.session = session
    }
    
    func execute(_ requestProvider: RequestProviding) -> AnyPublisher<Data, NetworkError> {
        guard let request = try? requestProvider.urlRequest() else {
            return Fail(error: NetworkError.nilURL)
                .eraseToAnyPublisher()
        }
        return session.dataTaskPublisher(for: request)
            .tryMap { data, response -> Data in
                guard let httpResponse = response as? HTTPURLResponse else {
                    throw NetworkError.unexpectedResponse
                }
                guard (200..<300).contains(httpResponse.statusCode) else {
                    throw NetworkError.httpCode(httpResponse.statusCode)
                }
                return data
            }
            .mapError { error -> NetworkError in
                if let error = error as? NetworkError {
                    return error
                } else {
                    return .networkError(reason: error.localizedDescription)
                }
            }
            .eraseToAnyPublisher()
    }
}
