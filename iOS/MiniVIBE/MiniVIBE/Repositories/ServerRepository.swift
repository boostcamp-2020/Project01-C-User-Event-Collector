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
}

struct RealServerRepository: ServerRepository {
    
    func fetch() -> AnyPublisher<Int, Error> {
        return Just(2)
            .setFailureType(to: Error.self)
            .eraseToAnyPublisher()
    }
}
