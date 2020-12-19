//
//  LocalDBRepository.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/02.
//

import SwiftUI
import BCEventEmitter

protocol LocalRepository {
    func fetchEvents() -> [CoreDataEvent]
    
    @discardableResult
    func saveEvent(event: Event) -> Bool
    
    @discardableResult
    func deleteAllEvent() -> Bool
}

struct RealLocalRepository: LocalRepository {
    let persistenceController: PersistenceController
        
    func fetchEvents() -> [CoreDataEvent] {
        let events = persistenceController.fetch(request: CDEvent.fetchRequest())
        return events.map { event -> CoreDataEvent in
            CoreDataEvent(cdEvent: event)
        }
    }
    
    func deleteAllEvent() -> Bool {
        return persistenceController.delete(request: CDEvent.fetchRequest())
    }
    
    func saveEvent(event: Event) -> Bool {
        let coreDataEvent = CoreDataEvent(name: event.name, parameter: event.parameters ?? [:])
        return persistenceController.saveEvent(event: coreDataEvent)
    }
}
