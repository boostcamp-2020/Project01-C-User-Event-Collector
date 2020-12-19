//
//  ServerRepositoryTests.swift
//  MiniVIBETests
//
//  Created by 최동규 on 2020/12/19.
//

@testable import MiniVIBE
import XCTest
import Combine


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
}
