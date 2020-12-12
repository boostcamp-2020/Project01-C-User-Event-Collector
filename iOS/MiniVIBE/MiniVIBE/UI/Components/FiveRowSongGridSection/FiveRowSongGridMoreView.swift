//
//  FiveRowSongGridMoreView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import SwiftUI

struct FiveRowSongGridMoreView: View {
    let viewModel: FiveRowSongGridView.ViewModel
    var body: some View {
        ZStack {
            Color.vibeBackground.ignoresSafeArea(edges: .vertical)
            VStack {
                DetailHeaderView(title: viewModel.title)
                ScrollView(.vertical, showsIndicators: false) {
                    LazyVGrid(
                        columns: [.init(.flexible())],
                        pinnedViews: [.sectionHeaders]
                    ) {
                        Section(header:
                                    PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})) {
                            fiveRowSongGridDetailItemViews
                        }
                    }
                }     .padding(.horizontal, .defaultPadding)
            }
        }.navigationBarHidden(true)
        .onAppear {
            emitEvent(event: MoveEvent(next: "\(Self.name)/\(self.viewModel.id)", setPrePath: true))
        }
    }
    
}

private extension FiveRowSongGridMoreView {
    var fiveRowSongGridDetailItemViews: some View {
        ForEach(viewModel.songs.indices) { index in
            HStack(spacing: .defaultSpacing) {
                AsyncImageView(url: viewModel.songs[index].imageURLString)
                    .frame(width: 40, height: 40,
                           alignment: .center)
                    .aspectRatio(contentMode: .fill)
                if viewModel.showsRanking {
                    VStack(alignment: .center) {
                        Text("\(index + 1)").vibeTitle3()
                        RankChangeView(change: viewModel.songs[index].rankChange)
                    }.frame(width: 21)
                }
                VStack(alignment: .leading) {
                    Text("\(viewModel.songs[index].title)").vibeTitle3()
                    Text("\(viewModel.songs[index].title)").vibeMainText()
                }
                Spacer()
                Button(action: {}, label: {
                    Image(systemName: "ellipsis")
                        .foregroundColor(.vibeTitle)
                })
            }
        }
    }
}
