//
//  FakeServerRepository.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/07.
//

import Foundation
import Combine

class FakeServerRepository: ServerRepository {
// 네이버에 get 요청을 보내서 응답을 받으면 이벤트가 보내진걸로 처리하고 자체 데이터에 이벤트를 담음.
    let network: Networking
    static var events: [LocalEvent] = []
    static var isEnabled: Bool = true
    
    init(network: Networking) {
        self.network = network
    }
    
    func send(events: [LocalEvent]) -> AnyPublisher<Void, NetworkError> {
        let request: RequestProviding
        
        if FakeServerRepository.isEnabled {
            request = MockEventRequest()
        } else {
            request = MockEventRequest(url: URL(string: "https://www.asdfasdferwqtgjeas125"))
        }
      return network.execute(request)
        .map({ _ -> Void in
            FakeServerRepository.events.append(contentsOf: events)
        })
        .eraseToAnyPublisher()
    }
    
    func loadMagazine(request: RequestProviding) -> AnyPublisher<MagazineResponse, NetworkError>
 {  return network.execute(request)
            .decode(type: MagazineResponse.self, decoder: JSONDecoder())
            .mapError({ error -> NetworkError in
                NetworkError.networkError(reason: error.localizedDescription)
            })
            .eraseToAnyPublisher()
    }
}

struct MockEventRequest: RequestProviding {
    var url: URL? = URL(string: "https://www.naver.com")
    var method: RequestMethod = .get
    var headers: [String: String]?
    func body() throws -> Data? {
        return nil
    }
}
