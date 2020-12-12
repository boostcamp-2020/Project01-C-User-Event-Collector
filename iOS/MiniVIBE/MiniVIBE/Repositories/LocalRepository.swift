//
//  LocalDBRepository.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/02.
//

import SwiftUI

protocol LocalRepository {
    func fetchEvent() -> [Event]
    func fetchEvents() -> [Event]
    func deleteAllEvent()
    func saveEvent(event: Event)
}

struct RealLocalRepository: LocalRepository {
    let persistenceStore = PersistenceController()

    func fetchEvent() -> [Event] {
        let cdEvents = persistenceStore.fetch(request: CDEvent.fetchRequest())
        return cdEvents.map { Event(cdEvent: $0) }
    }
    
    func deleteAllEvent() {
        let result = persistenceStore.deleteAll(request: CDEvent.fetchRequest())
        print(result ? "로컬 데이터 삭제 성공" : "로컬 데이터 삭제 실패")
    }
        
    func fetchEvents() -> [Event] {
        let events = persistenceStore.fetch(request: CDEvent.fetchRequest())
        return events.map { event -> Event in
            Event(cdEvent: event)
        }
    }

    func saveEvent(event: Event) {
        persistenceStore.saveEvent(event: event)
    }
}
