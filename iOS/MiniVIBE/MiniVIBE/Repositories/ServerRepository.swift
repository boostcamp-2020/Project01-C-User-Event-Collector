//
//  ServerRepository.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation
import Combine

protocol ServerRepository {
    func send(events: [LocalEvent]) -> AnyPublisher<Void, NetworkError>
    func loadMagazine(request: RequestProviding) -> AnyPublisher<MagazineResponse, NetworkError>
}

struct RealServerRepository: ServerRepository {
    func loadMagazine(request: RequestProviding) -> AnyPublisher<MagazineResponse, NetworkError> {
        return Just(MagazineResponse(data: []))
            .setFailureType(to: NetworkError.self)
            .eraseToAnyPublisher()
    }
    
    // FIXME: 서버 완성되면 수정
    let network: Networking
    func send(events: [LocalEvent])  -> AnyPublisher<Void, NetworkError> {
        return Just(())
            .setFailureType(to: NetworkError.self)
            .eraseToAnyPublisher()
    }
}
