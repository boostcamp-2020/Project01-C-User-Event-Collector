//
//  PlaylistSectionViewModel.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import SwiftUI

extension PlaylistSectionView {
    final class ViewModel: ObservableObject {
        @Published var playlists: [Playlist]
        let id: Int
        let title: String
        let subtitle: String?
        let width: CGFloat
        let container: DIContainer
        
        init(container: DIContainer, id: Int, title: String, width: CGFloat, subtitle: String? = nil, playlists: [Playlist] = MockItemFactory.playlists) {
            self.container = container
            self.id = id
            self.title = title
            self.subtitle = subtitle
            self.width = width
            self.playlists = playlists
        }
    }
}
