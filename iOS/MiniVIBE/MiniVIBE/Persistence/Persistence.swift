//
//  Persistence.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import CoreData
import BCEventEmitter

protocol PersistenceController {
    var persistentContainer: NSPersistentContainer { get }
    var context: NSManagedObjectContext { get }
    func fetch<T: NSManagedObject>(request: NSFetchRequest<T>) -> [T]
    func delete<T: NSManagedObject>(request: NSFetchRequest<T>) -> Bool
    func saveEvent(event: CoreDataEvent) -> Bool
    
}

class RealPersistenceController: PersistenceController {
    public static let modelName = "MiniVIBE"
    public static let model: NSManagedObjectModel = {
        let modelURL = Bundle.main.url(forResource: modelName, withExtension: "momd")!
        return NSManagedObjectModel(contentsOf: modelURL)!
    }()
    
    public func newDerivedContext() -> NSManagedObjectContext {
        let context = persistentContainer.newBackgroundContext()
        return context
    }
    
    lazy var persistentContainer: NSPersistentContainer = {
        let container = NSPersistentContainer(name: RealPersistenceController.modelName)
        container.loadPersistentStores(completionHandler: { (_, error) in
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
            emitEvent(event: ErrorEvent(from: "PersistenceController", reason: error.localizedDescription))
            return []
        }
    }
    
    func delete<T: NSManagedObject>(request: NSFetchRequest<T>) -> Bool {
        do {
            let fetchResult = try self.context.fetch(request)
            for object in fetchResult {
                let managedObjectData: NSManagedObject = object as NSManagedObject
                context.delete(managedObjectData)
            }
        } catch {
            emitEvent(event: ErrorEvent(from: "PersistenceController", reason: error.localizedDescription))
            return false
        }
        return true
    }
    
    func saveEvent(event: CoreDataEvent) -> Bool {
        guard let eventEntity = NSEntityDescription.entity(forEntityName: "CDEvent", in: context) else { return false }
        let cdEvent = NSManagedObject(entity: eventEntity, insertInto: context)
        cdEvent.setValue(event.name, forKey: "name")
        cdEvent.setValue(event.date, forKey: "dateString")
        
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
