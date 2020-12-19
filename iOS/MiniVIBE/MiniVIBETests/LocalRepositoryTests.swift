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
    private var testPersistenceController: PersistenceController!
    private var failPersistenceController: PersistenceController!
    
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
