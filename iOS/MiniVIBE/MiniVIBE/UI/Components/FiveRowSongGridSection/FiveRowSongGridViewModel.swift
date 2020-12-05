//
//  FiveRowSongGridViewModel.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/04.
//

import SwiftUI

extension FiveRowSongGridView {
    class ViewModel: ObservableObject {
        @State private(set) var songs: [Song] = (0...30).map { idx -> Song in
            var rankChange: String?
            if idx % 4 == 0 {
                rankChange = "up"
            } else if idx % 4 == 1 {
                rankChange = "new"
            } else if idx % 4 == 2 {
                rankChange = "down"
            } else {
                rankChange = nil
            }
            return Song(imageURLString: "HomeDJStationSection1",
                        title: "Test Music\(idx)", artist: "dochoi", rankChange: rankChange)
        }
        let id: Int
        let title: String
        let subtitle: String?
        let showsRanking: Bool
//        let container: DIContainer
        
        init(/*container: DIContainer,*/id: Int, title: String, subtitle: String? = nil, showsRanking: Bool = true) {
//            self.container = container
            self.id = id
            self.title = title
            self.subtitle = subtitle
            self.showsRanking = showsRanking
        }
    }
}

extension FiveRowSongGridView {
    func loadSongs() {
        
    }
}
