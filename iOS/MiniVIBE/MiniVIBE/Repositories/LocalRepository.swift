//
//  LocalDBRepository.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/02.
//

import SwiftUI

protocol LocalRepository {
    func fetchEvent() -> [Event]
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
        print(result ? "성공" : "실패")
    }
    
    func saveEvent(event: Event) {
        var cdEvent = persistenceStore.newEntity(entityName: "CDEvent") as? CDEvent
        cdEvent?.set(from: event)
        persistenceStore.saveContext()
    }
}
