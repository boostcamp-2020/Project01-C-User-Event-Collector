//
//  ServerRepositoryTests.swift
//  MiniVIBETests
//
//  Created by 최동규 on 2020/12/19.
//

@testable import MiniVIBE
import XCTest
import Combine
import BCEventEmitter


class ServerRepositoryTests: XCTestCase {
    private var subscriptions: Set<AnyCancellable> = []
    private let items = [Magazine(id: 124, title: "hihi", imageURLString: "hihi", date: "2020-11-11", tag: "123", content: "hihi")]
    
    struct MockSuccessNetwork: Networking {
        let items: [Magazine]
        func execute(_ requestProvider: RequestProviding) -> AnyPublisher<Data, NetworkError> {
            Just(ItemResponse(data: items))
                .setFailureType(to: NetworkError.self)
                .encode(encoder: JSONEncoder())
                .mapError({ error -> NetworkError in
                    return NetworkError.encodingError(error.localizedDescription)
                })
                .map { data -> Data in
                    return data
                }
                .eraseToAnyPublisher()
        }
    }
    
    struct MockEventSuccessNetwork: Networking {
        func execute(_ requestProvider: RequestProviding) -> AnyPublisher<Data, NetworkError> {
            Just(requestProvider.body)
                .setFailureType(to: NetworkError.self)
                .encode(encoder: JSONEncoder())
                .mapError{ error -> NetworkError in
                    XCTFail("\(error.localizedDescription)")
                    return NetworkError.encodingError(error.localizedDescription)
                }
                .eraseToAnyPublisher()
        }
    }
    
    struct MockFailureNetwork: Networking {
        func execute(_ requestProvider: RequestProviding) -> AnyPublisher<Data, NetworkError> {
            return Fail(error: NetworkError.networkError(reason: "FakeError"))
                .eraseToAnyPublisher()
        }
    }
    
    func test_server_init() {
        let repository = RealServerRepository(network: MockSuccessNetwork(items: items))
        XCTAssertNotNil(repository, "RealServerRepository is nill")
    }
    
    func test_server_load_success_magazine() {
        let repository = RealServerRepository(network: MockSuccessNetwork(items: items))
        repository.load(type: ItemResponse<[Magazine]>.self, request: ItemRequest())
            .sink { result in
                switch result {
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                case .finished:
                    break
                }
            } receiveValue: {[weak self] item in
                XCTAssertEqual(self?.items, item.data)
            }.store(in: &subscriptions)

    }
    
    func test_server_load_success_empty_data() {
        let repository = RealServerRepository(network: MockSuccessNetwork(items: []))
        repository.load(type: ItemResponse<[Magazine]>.self, request: ItemRequest())
            .sink { result in
                switch result {
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                case .finished:
                    break
                }
            } receiveValue: {item in
                XCTAssertEqual([], item.data)
            }.store(in: &subscriptions)
    }

    func test_server_load_failure() {
        let repository = RealServerRepository(network: MockFailureNetwork())
        repository.load(type: ItemResponse<[Magazine]>.self, request: ItemRequest())
            .sink { result in
                switch result {
                case .failure:
                    break
                case .finished:
                    XCTFail("네트워크 연결에 실패했음에도 성공")
                }
            } receiveValue: { _ in
                XCTFail("불리면 안되는 곳")
            }.store(in: &subscriptions)
    }
    
    func test_server_send_success() {
        RealServerRepository.events.removeAll()
        let event = Event(name: "test", parameters: [:])
        let repository = RealServerRepository(network: MockEventSuccessNetwork())
        repository.send(event: event)
            .sink { result in
                switch result {
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                case .finished:
                    break
                }
            } receiveValue: { _ in
        
            }.store(in: &subscriptions)
        XCTAssertTrue(RealServerRepository.events.first == event)
    }
    
    func test_server_send_failure() {
        let event = Event(name: "test", parameters: [:])
        let repository = RealServerRepository(network: MockFailureNetwork())
        repository.send(event: event)
            .sink { result in
                switch result {
                case .failure:
                    break
                case .finished:
                    XCTFail("네트워크 연결에 실패했음에도 성공")
                }
            } receiveValue: { _ in
                XCTFail("불리면 안되는 곳")
            }.store(in: &subscriptions)
    }
    
    func test_server_send_all_success() {
        RealServerRepository.events.removeAll()
        let events = [Event(name: "test", parameters: [:]),
                      Event(name: "test2", parameters: ["as":"hi"])]
        let repository = RealServerRepository(network: MockEventSuccessNetwork())
        repository.sendAll(events: events)
            .sink { result in
                switch result {
                case let .failure(error):
                    XCTFail(error.localizedDescription)
                case .finished:
                    break
                }
            } receiveValue: { _ in
        
            }.store(in: &subscriptions)
        XCTAssertTrue(RealServerRepository.events == events)
    }
    
    func test_server_send_all_failure() {
        let events = [Event(name: "test", parameters: [:]),
                      Event(name: "test2", parameters: ["as":"hi"])]
        let repository = RealServerRepository(network: MockFailureNetwork())
        repository.sendAll(events: events)
            .sink { result in
                switch result {
                case .failure:
                    break
                case .finished:
                    XCTFail("네트워크 연결에 실패했음에도 성공")
                }
            } receiveValue: { _ in
                XCTFail("불리면 안되는 곳")
            }.store(in: &subscriptions)
    }
}
