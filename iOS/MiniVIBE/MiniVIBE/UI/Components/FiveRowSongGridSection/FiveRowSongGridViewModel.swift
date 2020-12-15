//
//  FiveRowSongGridViewModel.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/04.
//

import SwiftUI

extension FiveRowSongGridView {
    final class ViewModel: ObservableObject {
        @Published private(set) var songs: [Song] = MockItemFactory.rankSongs
        let id: Int
        let title: String
        let subtitle: String?
        let showsRanking: Bool
        let container: DIContainer
        
        init(container: DIContainer, id: Int, title: String, subtitle: String? = nil, showsRanking: Bool = true) {
            self.container = container
            self.id = id
            self.title = title
            self.subtitle = subtitle
            self.showsRanking = showsRanking
        }
    }
}
