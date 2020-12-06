//
//  ServerRepository.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation
import Combine

protocol ServerRepository {
    
    func fetch() -> AnyPublisher<Int, Error>
    func eventSend(event: Event) -> Bool
}

struct RealServerRepository: ServerRepository {
    
    func fetch() -> AnyPublisher<Int, Error> {
        return Just(2)
            .setFailureType(to: Error.self)
            .eraseToAnyPublisher()
    }
    
    func eventSend(event: Event) -> Bool {
        print("\(event.tab) 탭으로 이동 이벤트 전송 완료")
        return true
    }
}
