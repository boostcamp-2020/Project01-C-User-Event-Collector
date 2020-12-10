//
//  CDEvent+CoreDataProperties.swift
//  
//
//  Created by GH Choi on 2020/12/06.
//
//

import Foundation
import CoreData

extension CDEvent {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<CDEvent> {
        return NSFetchRequest<CDEvent>(entityName: "CDEvent")
    }

    @NSManaged public var date: Date
    @NSManaged public var name: String
    
    func set(from event: Event) {
        date = event.date
        name = event.name
//        parameter = event.parameter
    }
}
