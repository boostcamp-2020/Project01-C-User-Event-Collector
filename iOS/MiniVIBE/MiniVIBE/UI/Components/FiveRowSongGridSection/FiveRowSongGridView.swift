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
    @StateObject var viewModel: Self.ViewModel
    @EnvironmentObject var musicPlayer: MusicPlayer
    var body: some View {
        VStack {
            NavigationLink(destination: FiveRowSongGridMoreView(viewModel: viewModel)
            ) {
            MoreHeaderView(title: viewModel.title, subtitle: viewModel.subtitle)
            }.emitEventIfTapped(event: TapEvent(component: name, target: TapEvent.Target.more))
            ScrollView(.horizontal, showsIndicators: false) {
                LazyHGrid(rows: rows, spacing: .defaultSpacing) {
                    fiveRowSongGridItemViews
                }
            }.padding(.leading, .defaultPadding)
        }
    }
}

extension FiveRowSongGridView {
    var name: String {
        String("\(Self.self)/\(viewModel.id)")
    }
}

private extension FiveRowSongGridView {
    var fiveRowSongGridItemViews: some View {
        ForEach(viewModel.songs.indices) { index in
            Button(action: {
                    musicPlayer.playinglist.append(viewModel.songs[index])
                    musicPlayer.play(index: musicPlayer.playinglist.count - 1)
            }, label: {            HStack(spacing: .defaultSpacing) {
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
            }.frame(width: .largeItemImageWidth)})
            .emitEventIfTapped(event: TapEvent(component: name, target: TapEvent.Target.song))
        }
    }
}
