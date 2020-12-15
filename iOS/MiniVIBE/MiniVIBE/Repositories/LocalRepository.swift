//
//  LocalDBRepository.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/02.
//

import SwiftUI
import EventEmitter

protocol LocalRepository {
    func fetchEvent() -> [CoreDataEvent]
    func fetchEvents() -> [CoreDataEvent]
    func deleteAllEvent()
    func saveEvent(event: Event)
}

struct RealLocalRepository: LocalRepository {
    let persistenceStore = PersistenceController()

    func fetchEvent() -> [CoreDataEvent] {
        let cdEvents = persistenceStore.fetch(request: CDEvent.fetchRequest())
        return cdEvents.map { CoreDataEvent(cdEvent: $0) }
    }
    
    func deleteAllEvent() {
        let result = persistenceStore.deleteAll(request: CDEvent.fetchRequest())
        print(result ? "로컬 데이터 삭제 성공" : "로컬 데이터 삭제 실패")
    }
        
    func fetchEvents() -> [CoreDataEvent] {
        let events = persistenceStore.fetch(request: CDEvent.fetchRequest())
        return events.map { event -> CoreDataEvent in
            CoreDataEvent(cdEvent: event)
        }
    }

    func saveEvent(event: Event) {
        let coreDataEvent = CoreDataEvent(name: event.name, parameter: event.parameters ?? [:])
        persistenceStore.saveEvent(event: coreDataEvent)
    }
}
