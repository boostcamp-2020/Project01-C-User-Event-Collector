//
//  AlbumSectionViewModel.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/04.
//

import SwiftUI

extension AlbumSectionView {
    class ViewModel: ObservableObject {
        @State private(set) var albums: [Album] = MockItemFactory.albums
        let id: Int
        let title: String
        let subtitle: String?
        let showsRanking: Bool
         
        init(id: Int, title: String, subtitle: String? = nil, showsRanking: Bool = true) {
            self.id = id
            self.title = title
            self.subtitle = subtitle
            self.showsRanking = showsRanking
        }
    }
}
