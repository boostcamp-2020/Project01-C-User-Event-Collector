//
//  PeristenceControllerTests.swift
//  MiniVIBETests
//
//  Created by GH Choi on 2020/12/16.
//

import CoreData
import XCTest
@testable import MiniVIBE



class PersistenceControllerTests: XCTestCase {
    var persistenceController: PersistenceController!

    override func setUpWithError() throws {
        persistenceController = TestPersistenceController()
    }

    override func tearDownWithError() throws {
        persistenceController = nil
    }

    func test_generateEvent() {
        let event = CoreDataEvent(name: "test", parameter: ["view": "test"])
        
        XCTAssertNotNil(event)
        XCTAssertTrue(event.name == "test")
        XCTAssertTrue(event.parameters == ["view": "test"])
    }
    
    func test_persistence_saveEvent() {
        expectation( forNotification: .NSManagedObjectContextDidSave, object: persistenceController.context) {
            notification in
            return true
        }

        persistenceController.context.perform {
            let event = CoreDataEvent(name: "test", parameter: ["view": "test"])
            XCTAssertTrue(self.persistenceController.saveEvent(event: event))
        }
        
        waitForExpectations(timeout: 2.0) { error in
            XCTAssertNil(error, "Save did not occur")
        }
    }
    
    func test_persistence_fetch() {
        let event = CoreDataEvent(name: "test", parameter: ["view": "test"])
        XCTAssertTrue(persistenceController.saveEvent(event: event))
        
        let fetchEvents = persistenceController.fetch(request: CDEvent.fetchRequest())
        XCTAssertTrue(fetchEvents.count == 1)
        
        if let fetchEvent = fetchEvents.first {
            let wrappedEvent = CoreDataEvent(cdEvent: fetchEvent)
            XCTAssertEqual(event, wrappedEvent)
        }
    }
    
    func test_delete() {
        let event = CoreDataEvent(name: "test", parameter: ["view": "test"])
        XCTAssertTrue(persistenceController.saveEvent(event: event))

        XCTAssertTrue(persistenceController.delete(request: CDEvent.fetchRequest()))
        
        let fetchEvents = persistenceController.fetch(request: CDEvent.fetchRequest())

        XCTAssertTrue(fetchEvents.isEmpty)
    }
}

