//
//  FiveRowSongGirdView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct FiveRowSongGridView: View {
    private let rows = [GridItem(.fixed(40), spacing: 15),
                        GridItem(.fixed(40), spacing: 15),
                        GridItem(.fixed(40), spacing: 15),
                        GridItem(.fixed(40), spacing: 15),
                        GridItem(.fixed(40), spacing: 15)]
    @ObservedObject private(set) var viewModel: Self.ViewModel
    
    init(viewModel: Self.ViewModel) {
        self.viewModel = viewModel
    }
    
    var body: some View {
        VStack {
            NavigationLink(destination: FiveRowSongGridMoreView(viewModel: viewModel)) {
            MoreHeaderView(title: viewModel.title, subtitle: viewModel.subtitle)
               }
            SectionScrollView {
                LazyHGrid(rows: rows, spacing: .defaultSpacing) {
                    fiveRowSongGridItemViews
                }
            }
        }
    }
}

private extension FiveRowSongGridView {
    var fiveRowSongGridItemViews: some View {
        ForEach(viewModel.songs.indices) { index in
            HStack(spacing: .defaultSpacing) {
                Image(viewModel.songs[index].imageURLString)
                    .resizable()
                    // FIXME: 고정값, ranking
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
            }.frame(width: .oneItemImageWidth)
        }
    }
}
