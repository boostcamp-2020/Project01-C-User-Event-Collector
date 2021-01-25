//
//  AlbumSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/04.
//

import SwiftUI

struct AlbumSectionView: View {
    let viewModel: Self.ViewModel
    
    init(viewModel: Self.ViewModel) {
        self.viewModel = viewModel
    }
    
    var body: some View {
        VStack {
            NavigationLink(destination: AlbumMoreView(viewModel: viewModel)) {
                MoreHeaderView(title: viewModel.title)
            }.emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.more))
            SectionScrollView {
                albumsView
            }
        }
    }
}

extension AlbumSectionView {
    var name: String {
        String("\(Self.self)/\(viewModel.id)")
    }
}

private extension AlbumSectionView {
    var albumsView: some View {
        ForEach(viewModel.albums.indices) { index in
            NavigationLink(destination: AlbumDetailView(album: viewModel.albums[index])) {
                ImageItemView(image: Image(viewModel.albums[index].imageURLString), width: .normalItemImageWidth) {
                    if viewModel.showsRanking {
                        HStack {
                            Text("\(index + 1)").vibeTitle3()
                            RankChangeView(change: viewModel.albums[index].rankChange)
                        }
                    }
                    Text(viewModel.albums[index].title)
                        .vibeTitle3()
                        .lineLimit(1)
                    Text(viewModel.albums[index].artist).vibeMainText()
                }
            }.emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.album))
        }
    }
}
