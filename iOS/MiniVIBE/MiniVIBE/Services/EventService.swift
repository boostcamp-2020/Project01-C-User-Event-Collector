//
//  EventService.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation
import Combine
import BCEventEmitter

protocol EventService {
    var serverRepository: ServerRepository { get }
    var localRepository: LocalRepository { get }
    var reachability: Reachability { get }
    func sendAllEvents()
    func sendOneEvent(event: Event)
}

final class RealEventService: EventService, ObservableObject {
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
    
    func sendOneEvent(event: Event) {
        serverRepository.send(event: event)
            .sink {[weak self] result in
                switch result {
                case let .failure(error):
                    self?.localRepository.saveEvent(event: ErrorEvent(from: "EventService sendOneEvent", reason: error.localizedDescription))
                    self?.localRepository.saveEvent(event: event)
                case .finished:
                    break
                }
            } receiveValue: { _ in
        }.store(in: &subscriptions)
    }

    func sendAllEvents() {
        serverRepository.sendAll(events: localRepository.fetchEvents())
            .sink {[weak self] result in
                switch result {
                case let .failure(error):
                    self?.localRepository.saveEvent(event: ErrorEvent(from: "EventService sendAllEvents", reason: error.localizedDescription))
                case .finished:
                    self?.localRepository.deleteAllEvent()
                }
            } receiveValue: { _ in
        }.store(in: &subscriptions)
    }
}
