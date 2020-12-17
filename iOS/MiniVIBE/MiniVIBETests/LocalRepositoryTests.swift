//
//  LocalRepositoryTests.swift
//  MiniVIBETests
//
//  Created by GH Choi on 2020/12/17.
//

import XCTest
import CoreData
@testable import MiniVIBE

class LocalRepositoryTests: XCTestCase {
    var testPersistenceController: PersistenceController!
    var failPersistenceController: PersistenceController!
    
    override func setUp() {
        testPersistenceController = TestPersistenceController()
        failPersistenceController = FailPersistenceController()
    }
    
    override func tearDown() {
        testPersistenceController = nil
        failPersistenceController = nil
    }
    
    func test_save_event() {
        let event = CoreDataEvent(name: "test", parameter: ["view": "test"])

        var repository = RealLocalRepository(persistenceController: testPersistenceController)
        XCTAssertTrue(repository.saveEvent(event: event))
        
        repository = RealLocalRepository(persistenceController: failPersistenceController)
        XCTAssertFalse(repository.saveEvent(event: event))
    }
    
    func test_delete() {
        var repository = RealLocalRepository(persistenceController: testPersistenceController)
        XCTAssertTrue(repository.deleteAllEvent())
        
        repository = RealLocalRepository(persistenceController: failPersistenceController)
        XCTAssertFalse(repository.deleteAllEvent())
    }
    
    func test_fetch() {
        var repository = RealLocalRepository(persistenceController: testPersistenceController)
        let event = CoreDataEvent(name: "test", parameter: ["view": "test"])
        _ = repository.saveEvent(event: event)
        XCTAssertFalse(repository.fetchEvents().isEmpty)
        
        repository = RealLocalRepository(persistenceController: failPersistenceController)
        _ = repository.saveEvent(event: event)
        XCTAssertTrue(repository.fetchEvents().isEmpty)
    }
}

class FailPersistenceController: PersistenceController {
    var persistentContainer: NSPersistentContainer = {
        let container = NSPersistentContainer(name: "test")
        return container
    }()
    
    var context: NSManagedObjectContext {
        return persistentContainer.viewContext
    }
    
    func fetch<T>(request: NSFetchRequest<T>) -> [T] where T : NSManagedObject {
        return []
    }
    
    func delete<T>(request: NSFetchRequest<T>) -> Bool where T : NSManagedObject {
        return false
    }
    
    func saveEvent(event: CoreDataEvent) -> Bool {
        return false
    }
}
