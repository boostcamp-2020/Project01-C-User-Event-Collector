//
//  MiniVIBEApp.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI

@main
struct MiniVIBEApp: App {
    init() {
        UITabBar.appearance().barTintColor = .black
    }
    let dbRepository = DBRepository()
    var body: some Scene {
        WindowGroup {
            ContentView().environmentObject(ContentView.ViewModel(dbRepository: dbRepository))
        }
    }
}
