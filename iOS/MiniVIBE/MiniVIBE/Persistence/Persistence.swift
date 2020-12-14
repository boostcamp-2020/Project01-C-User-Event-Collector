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
    
    func saveEvent(event: CoreDataEvent) -> Bool {
        guard let eventEntity = NSEntityDescription.entity(forEntityName: "CDEvent", in: context) else { return false }
        let cdEvent = NSManagedObject(entity: eventEntity, insertInto: context)
        cdEvent.setValue(event.name, forKey: "name")
        cdEvent.setValue(event.date, forKey: "date")
        
        guard let parameters = event.parameters else { return false }
            let params = parameters.compactMap { (key, value) -> CDParameter? in
                guard let parameterEntity = NSEntityDescription.entity(forEntityName: "CDParameter", in: context) else { return nil }
                guard let cdParameter = NSManagedObject(entity: parameterEntity, insertInto: context) as? CDParameter else { return nil }
            cdParameter.setValue(key, forKey: "key")
            cdParameter.setValue(value, forKey: "value")
            return cdParameter
            }
        let parameterSet = NSSet(array: params)
            cdEvent.setValue(parameterSet, forKey: "parameter")
        
        do {
            try context.save()
        } catch {
            print(error.localizedDescription)
            return false
        }
        return true
    }
}
