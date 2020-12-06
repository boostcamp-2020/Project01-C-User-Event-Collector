//
//  LocalDBRepository.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/02.
//

import SwiftUI

protocol LocalRepository {
    func fetchEvents() -> [LocalEvent]
    func deleteAllEvent()
    func newEvent() -> Event
    func saveContext()
}

struct RealLocalRepository: LocalRepository {
    let persistenceStore = PersistenceController()
    
    func fetchEvents() -> [LocalEvent] {
        let events = persistenceStore.fetch()
        return events.map { event -> LocalEvent in
            LocalEvent(log: "\(event.date?.description ?? "") \(event.tab) Tab was pressed")
        }
    }
    
    func deleteAllEvent() {
        let result = persistenceStore.deleteAll()
        print(result ? "로컬 데이터 삭제 성공" : "로컬 데이터 삭제 실패")
    }
    
    func newEvent() -> Event {
        let event = Event(context: persistenceStore.context)
        return event
    }
    
    func saveContext() {
        _ = persistenceStore.saveContext()
    }
}
