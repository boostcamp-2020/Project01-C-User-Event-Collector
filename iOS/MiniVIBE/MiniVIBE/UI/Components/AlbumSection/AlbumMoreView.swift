//
//  AlbumMoreView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/28.
//

import SwiftUI

struct AlbumMoreView: View {
    let viewModel: AlbumSectionView.ViewModel
    var body: some View {
        ZStack {
            Color.vibeBackground.ignoresSafeArea(edges: .vertical)
            VStack {
                DetailHeaderView(title: viewModel.title)
                ScrollView(.vertical, showsIndicators: false) {
                    LazyVGrid(columns: [.init(.adaptive(minimum: .itemImageMinWidth, maximum: .largeItemImageMaxWidth))], spacing: .defaultSpacing) {
                        ForEach(viewModel.albums) { album in
                            NavigationLink(destination: AlbumDetailView(album: album)) {
                                VStack(alignment: .leading, spacing: .defaultSpacing) {
                                    Image(album.imageURLString)
                                        .resizable()
                                        .scaledToFit()
                                    Text(album.title).vibeTitle3()
                                    album.description.map({Text($0).vibeMainText().lineLimit(1)})
                                    Text(album.artist).vibeMainText()
                                }
                            }
                        }
                    }.padding(.horizontal, .defaultPadding)
                }
            }
        }.navigationBarHidden(true)
        .onAppear {
            emitEvent(event: MoveEvent(next: "\(Self.name)/\(self.viewModel.id)", setPrePath: true))
        }
    }
}
