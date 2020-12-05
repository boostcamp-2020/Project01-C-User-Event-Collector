//
//  Persistence.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import CoreData

class PersistenceController {
    lazy var persistentContainer: NSPersistentContainer = {
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
    
    func fetch() -> [CDEvent] {
        do {
            let request: NSFetchRequest<CDEvent> = CDEvent.fetchRequest()
            let fetchResult = try self.context.fetch(request)
            return fetchResult
        } catch {
            print(error.localizedDescription)
            return []
        }
    }
    
    func deleteAll() -> Bool {
        let request: NSFetchRequest<NSFetchRequestResult> = CDEvent.fetchRequest()
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
            return true
        } catch { print(error.localizedDescription)
            return false
        }
    }
}
