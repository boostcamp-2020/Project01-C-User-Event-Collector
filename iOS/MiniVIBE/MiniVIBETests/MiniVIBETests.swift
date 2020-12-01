//
//  MiniVIBETests.swift
//  MiniVIBETests
//
//  Created by 최동규 on 2020/12/01.
//

import XCTest
import Combine
@testable import MiniVIBE

class MiniVIBETests: XCTestCase {
    
    private var subscriptions: Set<AnyCancellable> = []
    
    func test_success_with_naverURL() {
        let expectation = XCTestExpectation(description: "NetworkTaskExpectation")
        defer { wait(for: [expectation], timeout: 5.0) }
        let network = Network()
        let naverRequest = MockRequest(url: URL(string: "https://www.naver.com"))
        network.execute(naverRequest)
            .sink { result in
                switch result {
                case .finished:
                    expectation.fulfill()
                case let .failure(error):
                    XCTFail("\(error)")
                }
            } receiveValue: { _ in
            }
            .store(in: &subscriptions)
    }
    
    func test_failure_with_nilURL() {
        let expectation = XCTestExpectation(description: "NetworkTaskExpectation")
        defer { wait(for: [expectation], timeout: 5.0) }
        let network = Network()
        let naverRequest = MockRequest(url: nil)
        network.execute(naverRequest)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("nil인 URL임에도 성공")
                case let .failure(error):
                    if error == NetworkError.nilURL {
                        expectation.fulfill()
                    } else {
                        XCTFail("\(error)")
                    }
                }
            } receiveValue: { _ in
            }
            .store(in: &subscriptions)
    }
    
    func test_failure_with_invalid_asdfURL() {
        let expectation = XCTestExpectation(description: "NetworkTaskExpectation")
        defer { wait(for: [expectation], timeout: 5.0) }
        let network = Network()
        let naverRequest = MockRequest(url: URL(string: "asdf"))
        network.execute(naverRequest)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("유효하지 않은 URL임에도 성공")
                case let .failure(error):
                    if error == NetworkError.networkError(reason: "") {
                        expectation.fulfill()
                    } else {
                        XCTFail("\(error)")
                    }
                }
            } receiveValue: { _ in
            }
            .store(in: &subscriptions)
    }
    
    func test_failure_with_naver404() {
        let expectation = XCTestExpectation(description: "https://www.naver.com/asdfasdf")
        defer { wait(for: [expectation], timeout: 5.0) }
        let network = Network()
        let naverRequest = MockRequest(url: URL(string: "https://www.naver.com/asdfasdf"))
        network.execute(naverRequest)
            .sink { result in
                switch result {
                case .finished:
                    XCTFail("404 URL임에도 성공")
                case let .failure(error):
                    if error == NetworkError.httpCode(404) {
                        expectation.fulfill()
                    } else {
                        XCTFail("\(error)")
                    }
                }
            } receiveValue: { _ in
            }
            .store(in: &subscriptions)
    }
    
    deinit {
        subscriptions.forEach { subscription in
            subscription.cancel()
        }
    }
}
