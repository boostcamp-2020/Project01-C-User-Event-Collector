//
//  EventServiceTests.swift
//  MiniVIBETests
//
//  Created by GH Choi on 2020/12/19.
//

import XCTest
import Combine
import BCEventEmitter
@testable import MiniVIBE


class EventServiceTests: XCTestCase {
    private let localRepository = MockLocalRepository()
    private let serverRepository = MockServerRepository()

    func test_send_one_event() throws {
        let eventService = RealEventService(serverRepository: serverRepository, localRepository: localRepository)
        let errorEvent = ErrorEvent(from: "EventService sendOneEvent", reason: NetworkError.unexpectedResponse.localizedDescription)
        let event = CoreDataEvent(name: "test", parameter: ["view": "test"])

        eventService.sendOneEvent(event: event)
        let fetched = localRepository.fetchEvents() as [Event]
        XCTAssertEqual(fetched.first?.name, errorEvent.name)
        XCTAssertEqual(fetched.first?.parameters, errorEvent.parameters)
        XCTAssertEqual(fetched.last, event)
    }

    func test_send_all_events() {
        let eventService = RealEventService(serverRepository: serverRepository, localRepository: localRepository)
        let errorEvent = ErrorEvent(from: "EventService sendAllEvents", reason: NetworkError.unexpectedResponse.localizedDescription)
        
        eventService.sendAllEvents()
        let fetched = localRepository.fetchEvents() as [Event]
        XCTAssertEqual(fetched.first?.name, errorEvent.name)
        XCTAssertEqual(fetched.first?.parameters, errorEvent.parameters)
    }

}

class MockLocalRepository: LocalRepository {
    private var savedEvents: [CoreDataEvent] = []
    
    func fetchEvents() -> [CoreDataEvent] {
        return savedEvents
    }
    
    func saveEvent(event: Event) -> Bool {
        let coreDataEvent = CoreDataEvent(name: event.name, parameter: event.parameters!, date: event.date)
        savedEvents.append(coreDataEvent)
        return true
    }
    
    func deleteAllEvent() -> Bool {
        savedEvents.removeAll()
        return true
    }
}

class MockServerRepository: ServerRepository {
    func send(event: Event) -> AnyPublisher<Void, NetworkError> {
        return Fail<Void, NetworkError>(error: NetworkError.unexpectedResponse)
            .eraseToAnyPublisher()
    }

    func sendAll(events: [Event]) -> AnyPublisher<Void, NetworkError> {
        return Fail<Void, NetworkError>(error: NetworkError.unexpectedResponse)
            .eraseToAnyPublisher()
    }

    func load<T>(type: T.Type, request: RequestProviding) -> AnyPublisher<T, NetworkError> where T : Decodable {
        return Fail<T, NetworkError>(error: NetworkError.unexpectedResponse)
            .eraseToAnyPublisher()
    }
}
