//
//  FailPersistenceController.swift
//  MiniVIBETests
//
//  Created by GH Choi on 2020/12/19.
//

import Foundation
import CoreData
@testable import MiniVIBE

final class FailPersistenceController: PersistenceController {
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
