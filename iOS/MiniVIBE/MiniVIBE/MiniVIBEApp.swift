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
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct MiniVIBEApp_Previews: PreviewProvider {
    static var previews: some View {
        Text("Hello, World!")
    }
}
