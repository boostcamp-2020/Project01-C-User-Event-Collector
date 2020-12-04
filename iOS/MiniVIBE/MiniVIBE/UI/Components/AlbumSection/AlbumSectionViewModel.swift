//
//  AlbumSectionViewModel.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/04.
//

import SwiftUI


extension AlbumSectionView {
    class ViewModel: ObservableObject {
        @State private(set) var albums: [Album] = [
            Album(imageURLString: "newAlbum-dummy1", title: "ARTIST. New Bi", artist: "Anonymous Artists", songs: [], rankChange: "up"),
            Album(imageURLString: "newAlbum-dummy2", title: "Darling", artist: "양다일", songs: []),
            Album(imageURLString: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel", songs: [])]
        let title: String
        let subtitle: String?
        let showsRanking: Bool
         
        init(title: String, subtitle: String? = nil, showsRanking: Bool = true) {
            self.title = title
            self.subtitle = subtitle
            self.showsRanking = showsRanking
        }
    }
}
