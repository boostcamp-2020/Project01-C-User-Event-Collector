//
//  DBRepository.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/02.
//

import SwiftUI

struct DBRepository: EnvironmentKey {
    static var defaultValue = DBRepository()
    
    let persistenceStore = PersistenceController()
    
    //컴바인 적용해서 퍼블리셔로 바꿔야 할 수도 있음
//    func addEvent(event: Event) {
//        persistenceStore.addEvent(event: event)
//    }
//
    func fetchEvent() {
        let event = persistenceStore.fetch()
        event.forEach {
            print($0.tab)
        }
    }
    
    func deleteAllEvent() {
        let result = persistenceStore.deleteAll()
        print(result ? "성공" : "실패")
    }
    
    func newEvent() -> Event {
        let event = Event(context: persistenceStore.context)
        return event
    }
    
    func saveContext() {
        persistenceStore.saveContext()
    }
    
}

extension EnvironmentValues {
    var dbRepository: DBRepository {
        get { self[DBRepository.self] }
        set { self[DBRepository.self] = newValue}
    }
}
