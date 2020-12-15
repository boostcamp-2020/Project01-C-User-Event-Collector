//
//  FakeServerRepository.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/07.
//

import Foundation
import Combine
import BCEventEmitter

class RealServerRepository: ServerRepository {
    let network: Networking
    static var events: [Event] = []
    static var isEnabled: Bool = true

    init(network: Networking) {
        self.network = network
    }
    
    func send(event: Event) -> AnyPublisher<Void, NetworkError> {
        return Just(event)
            .setFailureType(to: NetworkError.self)
            .encode(encoder: JSONEncoder())
            .mapError { error -> NetworkError in
                   // 3.
                   return NetworkError.encodingError(error.localizedDescription)
            }
            .map { encodedData -> RequestProviding in
                if RealServerRepository.isEnabled {
                return EventRequest(body: encodedData)
                } else {
                    return FailureEventRequest(body: encodedData)
                }
            }
            .flatMap {
                self.network.execute($0)
            }
            .map { _ -> Void in
                
                RealServerRepository.events.append(event)
            }.eraseToAnyPublisher()
    }
    
    func sendAll(events: [Event]) -> AnyPublisher<Void, NetworkError> {
        let request: RequestProviding
        
        if RealServerRepository.isEnabled {
            request = FailureEventRequest(url: URL(string: "https://www.naver.com"))
        } else {
            request = FailureEventRequest(url: URL(string: "https://www.asdfasdferwqtgjeas125"))
        }
        return network.execute(request)
            .map({ _ -> Void in
                RealServerRepository.events.append(contentsOf: events)
            })
            .eraseToAnyPublisher()
    }
    
    func load<T>(type: T.Type, request: RequestProviding) -> AnyPublisher<T, NetworkError> where T: Decodable {
        return network.execute(request)
            .decode(type: type, decoder: JSONDecoder())
            .mapError({ error -> NetworkError in
                NetworkError.networkError(reason: error.localizedDescription)
            })
            .eraseToAnyPublisher()
    }
}
