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
    var serverRepository: ServerRepository { get }
    var localRepository: LocalRepository { get }
    var reachability: Reachability { get }
    func sendAllEvents()
    
    func sendOneEvent(event: Event)
}

final class RealEventService: EventService, ObservableObject {
    var isServerReachable: Bool = false
    let serverRepository: ServerRepository
    let localRepository: LocalRepository
    @Published var reachability = Reachability()
    private var subscriptions = Set<AnyCancellable>()
    
    init(serverRepository: ServerRepository, localRepository: LocalRepository) {
        self.serverRepository = serverRepository
        self.localRepository = localRepository
        bindReachability()
    }
    
    func bindReachability() {
        reachability.$isConnected.sink { result in
            if result {
                self.sendAllEvents()
            }
        }.store(in: &subscriptions)
    }
    
    func sendOneEvent(event: Event) { // 이벤트 전송 시점
        serverRepository.send(event: event)
            .sink { result in
                switch result {
                case let .failure(error):
                    print(error.localizedDescription)
                    self.isServerReachable = false
                    self.localRepository.saveEvent(event: event)
                case .finished:
                    self.localRepository.deleteAllEvent()
                }
            } receiveValue: { _ in
        }.store(in: &subscriptions)
    }

    func sendAllEvents() { // 이벤트 전송
        serverRepository.sendAll(events: localRepository.fetchEvents())
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
