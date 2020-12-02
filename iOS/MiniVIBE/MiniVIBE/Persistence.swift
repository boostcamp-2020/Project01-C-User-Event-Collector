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
//
//    func addEvent(event: Event) -> Bool {
//        guard let entity = NSEntityDescription.entity(forEntityName: "Event", in: self.context) else { return false }
//        let managedObject = NSManagedObject(entity: entity, insertInto: self.context)
//        managedObject.setValue(event.tab, forKey: "tab")
//        do {
//            try self.context.save()
//            return true
//        } catch { print(error.localizedDescription)
//            return false
//        }
//    }

    func fetch() -> [Event] {
        do {
            let request: NSFetchRequest<Event> = Event.fetchRequest()
            let fetchResult = try self.context.fetch(request)
            return fetchResult
        } catch {
            print(error.localizedDescription)
            return []
        }
    }

    func deleteAll() -> Bool {
        let request: NSFetchRequest<NSFetchRequestResult> = Event.fetchRequest()
        let delete = NSBatchDeleteRequest(fetchRequest: request)
        do {
            try self.context.execute(delete)
            return true
        } catch {
            return false
        }
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
