//
//  ServerRepository.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation
import Combine

protocol ServerRepository {
    func send(events: [Event]) -> AnyPublisher<Void, NetworkError>
    func eventSend(event: Event) -> Bool
}

struct RealServerRepository: ServerRepository {
    
    // FIXME: 서버 완성되면 수정
    let network: Networking
    func send(events: [Event])  -> AnyPublisher<Void, NetworkError> {
        return Just(())
            .setFailureType(to: NetworkError.self)
            .eraseToAnyPublisher()
    }
    
    func eventSend(event: Event) -> Bool {
        print("\(event.tab) 탭으로 이동 이벤트 전송 완료")
        return true
    }
}
