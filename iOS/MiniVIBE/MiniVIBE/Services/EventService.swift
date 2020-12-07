//
//  EventService.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation
import Combine

protocol EventService {
    var isServerReachable: Bool { get }
    var isNetworkReachable: Bool { get }
    var serverRepository: ServerRepository { get }
    var localRepository: LocalRepository { get }
    func sendAllEvents()
}

final class RealEventService: EventService {
    var isServerReachable: Bool = false
    var isNetworkReachable: Bool = false
    let serverRepository: ServerRepository
    let localRepository: LocalRepository
    private var subscriptions = Set<AnyCancellable>()
    
    init(serverRepository: ServerRepository, localRepository: LocalRepository) {
        self.serverRepository = serverRepository
        self.localRepository = localRepository
    }
    
    func sendAllEvents() { // 이벤트 전송
        serverRepository.send(events: localRepository.fetchEvents())
            .sink { result in
                switch result {
                case let .failure(error):
                    print(error.localizedDescription)
                    self.isServerReachable = false
                case .finished:
                    self.localRepository.deleteAllEvent()
                }
            } receiveValue: { _ in
        }.store(in: &subscriptions)
    }
}
