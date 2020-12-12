//
//  ServerRepository.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation
import Combine

protocol ServerRepository {

    func send(event: Event) -> AnyPublisher<Void, NetworkError>
    func sendAll(events: [Event]) -> AnyPublisher<Void, NetworkError>
    func load<T>(type: T.Type, request: RequestProviding) -> AnyPublisher<T, NetworkError> where T: Decodable
}
