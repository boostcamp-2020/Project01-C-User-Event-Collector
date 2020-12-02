//
//  fiveRowMusicGirdView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct FiveRowSongGirdView: View {
    private let rows = [GridItem(.fixed(40), spacing: 15),
                        GridItem(.fixed(40), spacing: 15),
                        GridItem(.fixed(40), spacing: 15),
                        GridItem(.fixed(40), spacing: 15),
                        GridItem(.fixed(40), spacing: 15)]
    private(set) var songs: [Song]
    private let showsranking: Bool
    
    init(songs: [Song], showsranking: Bool = false) {
        self.songs = songs
        self.showsranking = showsranking
    }
    
    var body: some View {
        LazyHGrid(rows: rows, spacing: .defaultSpacing) {
            ForEach(songs.indices) { index in
                HStack(spacing: 15) {
                    Image(songs[index].imageURLString)
                        .resizable()
                        // FIXME: 고정값, ranking
                        .frame(width: 40, height: 40,
                               alignment: .center)
                        .aspectRatio(contentMode: .fill)
                    if showsranking {
                        VStack(alignment: .leading) {
                            Text("\(index + 1)").vibeTitle3()
                            Text("").vibeMainText()
                        }
                    }
                    VStack(alignment: .leading) {
                        Text("\(songs[index].title)").vibeTitle3()
                        Text("\(songs[index].title)").vibeMainText()
                    }
                    Spacer()
                }.frame(width: .oneItemImageWidth)

            }
        }
    }
}
