//
//  MiniVIBEApp.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI

@main
struct MiniVIBEApp: App {
    let container: DIContainer
    
    init() {
        UITabBar.appearance().barTintColor = .black
        let localRepository = RealLocalRepository()
        let serverRepository = RealServerRepository()
        let eventService = RealEventService(serverRepository: serverRepository, localRepository: localRepository)
        let musicPlayer = MusicPlayer()
        container = DIContainer(serverRepository: serverRepository,
                                localRepository: localRepository,
                                eventService: eventService,
                                musicPlayer: musicPlayer)
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView(viewModel: ContentView.ViewModel(container: container)).environmentObject(container.musicPlayer)
        }
    }
    
}
