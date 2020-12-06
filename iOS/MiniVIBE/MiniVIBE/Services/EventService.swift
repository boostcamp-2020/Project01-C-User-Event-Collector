//
//  EventService.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation
import SwiftUI
import Combine

protocol EventService {
    var isServerReachable: Bool { get }
    var serverRepository: ServerRepository { get }
    var localRepository: LocalRepository { get }
    func send(event: Event)
    var reachability: Reachability { get }
}
class RealEventService: EventService {
    var isServerReachable: Bool = true
    let serverRepository: ServerRepository
    let localRepository: LocalRepository
    let reachability = Reachability()
    
    init(serverRepository: ServerRepository, localRepository: LocalRepository) {
        self.serverRepository = serverRepository
        self.localRepository = localRepository
        bindReachability()
    }
    
    func bindReachability() {
        reachability.$isConnected.sink { result in
            if result {
                print("연결됨")
                self.sendOldData()
            }
        }
    }
    
    func send(event: Event) { // 이벤트 전송 시점
        //서버로 접근
        if serverRepository.eventSend(event: event) {
            localRepository.deleteAllEvent() // 성공
        } else { //서버 실패시 로컬에 저장
            localRepository.saveEvent(event: event)
        }
    }
    
    func sendOldData() {
        let events = localRepository.fetchEvent()
        events.forEach { serverRepository.eventSend(event: $0) }
        localRepository.deleteAllEvent()
    }
}
