//
//  LocalDBRepository.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/02.
//

import SwiftUI

protocol LocalRepository {
    func fetchEvent()
    func deleteAllEvent()
    func newEvent() -> CDEvent
    func saveContext()
}

struct RealLocalRepository: LocalRepository {
    let persistenceStore = PersistenceController()
    
    func fetchEvent() {
        let event = persistenceStore.fetch()
        event.forEach {
            print("\($0.date?.description ?? "") \($0.tab) Tab was pressed")
        }
    }
    
    func deleteAllEvent() {
        let result = persistenceStore.deleteAll()
        print(result ? "성공" : "실패")
    }
    
    func newEvent() -> CDEvent {
        let event = CDEvent(context: persistenceStore.context)
        return event
    }
    
    func saveContext() {
        _ = persistenceStore.saveContext()
    }
}
