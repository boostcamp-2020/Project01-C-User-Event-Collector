//
//  PlayListSectionViewModel.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import SwiftUI

extension PlayListSectionView {
    class ViewModel: ObservableObject {
        @State private(set) var playLists: [PlayList]
            = [PlayList(imageURLString: "HomePlayListSection1", title: "로맨틱 팝",
                        subtitle: "VIBE Pop", songs: []),
               PlayList(imageURLString: "HomePlayListSection2", title: "편견을 깨는 힙합 아이돌",
                        subtitle: "VIBE 국내 힙합", songs: []),
               PlayList(imageURLString: "HomePlayListSection3", title: "팝 트렌드",
                        subtitle: "VIBE Pop", songs: [])]
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
