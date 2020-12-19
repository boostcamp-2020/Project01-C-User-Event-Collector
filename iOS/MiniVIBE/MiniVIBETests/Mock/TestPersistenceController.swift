//
//  TestPersistenceController.swift
//  MiniVIBETests
//
//  Created by GH Choi on 2020/12/16.
//

import Foundation
import CoreData
@testable import MiniVIBE

final class TestPersistenceController: RealPersistenceController {
    override init() {
        super.init()
        
        let persistentStoreDescription = NSPersistentStoreDescription()
        persistentStoreDescription.type = NSInMemoryStoreType
        
        let container = NSPersistentContainer(name: RealPersistenceController.modelName, managedObjectModel: RealPersistenceController.model)
        container.persistentStoreDescriptions = [persistentStoreDescription]
        
        container.loadPersistentStores { (_, error) in
            if let error = error as NSError? {
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
        }
        self.persistentContainer = container
    }
}
