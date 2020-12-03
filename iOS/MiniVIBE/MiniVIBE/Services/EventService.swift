//
//  EventService.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation

protocol EventService {
    var isServerReachable: Bool { get }
    var isNetworkReachable: Bool { get }
    var serverRepository: ServerRepository { get }
    var localRepository: LocalRepository { get }
    func send(event: Event)
}
class RealEventService: EventService {
    let isServerReachable: Bool = false
    let isNetworkReachable: Bool = false
    let serverRepository: ServerRepository
    let localRepository: LocalRepository
    
    init(serverRepository: ServerRepository, localRepository: LocalRepository) {
        self.serverRepository = serverRepository
        self.localRepository = localRepository
    }
    
    func send(event: Event) { // 이벤트 전송
        // 리쳐블리티 && 서버가 켜져있는지 검사
//        guard isServerReachable && isNetworkReachable else { return }
//        if serverRepository.eventSend(event: event){
//            dbRepository.removeAll() // 성공
//            serverEnabled = true
//        } else { //실패
//            dbRepository.store(event: event)
//            serverEnabled = false
        }

}
