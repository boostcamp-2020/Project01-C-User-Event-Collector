//
//  MiniVIBEApp.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import BCEventEmitter

@main
struct MiniVIBEApp: App {
    let container: DIContainer
    let musicPlayer = MusicPlayer()
    
    init() {
        let serverRepository = RealServerRepository(network: Network())
        let localRepository = RealLocalRepository()
        let eventService = RealEventService(serverRepository: serverRepository, localRepository: localRepository)
        EventSendManager.shared.setEventHandler(eventHandler: eventService.sendOneEvent)
        container = DIContainer(serverRepository: serverRepository,
                                localRepository: localRepository,
                                eventService: eventService)
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView(viewModel: ContentView.ViewModel(container: container)).environmentObject(musicPlayer).onAppear {
                fakePlayMusic()
            }
        }
    }
    
    func fakePlayMusic() {
        musicPlayer.subscription  = musicPlayer.timer.sink { _ in
            if musicPlayer.isPlaying {
                if musicPlayer.currentProgress < 50 {
                    musicPlayer.currentProgress += 1
                } else {
                    musicPlayer.currentProgress = 0
                    musicPlayer.isPlaying = false
                    withAnimation {
                        musicPlayer.showMembership = true
                    }
                }
            }
        }
    }
}
