//
//  MiniVIBEApp.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI

@main
struct MiniVIBEApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
