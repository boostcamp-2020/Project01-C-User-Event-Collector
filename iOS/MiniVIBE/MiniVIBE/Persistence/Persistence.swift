//
//  Persistence.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import CoreData

final class PersistenceController {
    var persistentContainer: NSPersistentContainer = {
        let container = NSPersistentContainer(name: "MiniVIBE")
        container.loadPersistentStores(completionHandler: { (storeDescription, error) in
            if let error = error as NSError? {
                fatalError("Unresolved error \(error), \(error.userInfo)") }
        })
        return container
    }()
    
    var context: NSManagedObjectContext {
        return persistentContainer.viewContext
    }
    
    func fetch<T: NSManagedObject>(request: NSFetchRequest<T>) -> [T] {
        do {
            let fetchResult = try self.context.fetch(request)
            return fetchResult
        } catch {
            print(error.localizedDescription)
            return []
        }
    }
    
    func deleteAll<T: NSManagedObject>(request: NSFetchRequest<T>) -> Bool {
        let request = T.fetchRequest()
        let delete = NSBatchDeleteRequest(fetchRequest: request)
        do {
            try self.context.execute(delete)
        } catch {
            return false
        }
        return true
    }
    
    func saveContext() -> Bool {
        do {
            try self.context.save()
        } catch { print(error.localizedDescription)
            return false
        }
        return true
    }
    
    func newEntity(entityName: String) -> NSManagedObject? {
        guard let entity = NSEntityDescription.entity(forEntityName: entityName, in: context) else {
            return nil
        }
        return NSManagedObject(entity: entity, insertInto: context)
    }
}
