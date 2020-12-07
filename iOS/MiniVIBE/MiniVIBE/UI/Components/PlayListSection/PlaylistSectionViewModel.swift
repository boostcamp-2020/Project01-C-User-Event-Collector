//
//  PlaylistSectionViewModel.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import SwiftUI

extension PlaylistSectionView {
    final class ViewModel: ObservableObject {
        @State private(set) var playlists: [Playlist]
            = MockItemFactory.playlists
        let id: Int
        let title: String
        let subtitle: String?
        let type: ImageSizeType
        
        init(id: Int, title: String, type: ImageSizeType, subtitle: String? = nil) {
            self.id = id
            self.title = title
            self.subtitle = subtitle
            self.type = type
        }
    }
}
