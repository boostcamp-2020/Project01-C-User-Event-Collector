//
//  PlayListSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import SwiftUI

struct PlayListSectionView: View {
    let viewModel: Self.ViewModel
    
    init(viewModel: Self.ViewModel) {
        self.viewModel = viewModel
    }
    
    var body: some View {
        playListSectionScrollView
    }
}

private extension PlayListSectionView {
    var playListSectionScrollView: some View {
        VStack {
            NavigationLink(destination: PlayListMoreView(viewModel: viewModel)) {
                MoreHeaderView(title: viewModel.title)
            }
            SectionScrollView {
                ForEach(viewModel.playLists) { playList in
                    ImageItemView(image: Image(playList.imageURLString), type: viewModel.type) {
                        Text(playList.title)
                            .vibeTitle3()
                        Text(playList.subtitle)
                            .vibeMainText()
                        Text(playList.description ?? "")
                            .vibeMainText()
                            .lineLimit(2)
                    }
                }
            }
        }
    }
}
