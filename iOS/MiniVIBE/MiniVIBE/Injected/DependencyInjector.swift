//
//  DependencyInjector.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import Foundation

struct DIContainer {
    let serverRepository: ServerRepository
    let localRepository: LocalRepository
    let eventService: EventService
    
//    let musicPlayer: MusicPlayer
}
