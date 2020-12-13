//
//  Network.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation
import Combine

final class Network: Networking {
    private let session: URLSession
    
    init(session: URLSession = .shared) {
        self.session = session
    }
    
    func execute(_ requestProvider: RequestProviding) -> AnyPublisher<Data, NetworkError> {
        let request: URLRequest
        do {
            request = try requestProvider.urlRequest()
        } catch {
            return Fail(error: NetworkError.requestProvider(reason: error.localizedDescription))
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
