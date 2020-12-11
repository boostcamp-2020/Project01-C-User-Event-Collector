//
//  LibraryAlbumView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/09.
//

import SwiftUI
import Combine

struct LibraryAlbumView: View {
    @StateObject var viewModel: Self.ViewModel
    var body: some View {
        LazyVGrid(columns: [.init(.fixed(.twoItemImageWidth)),
                            .init(.fixed(.twoItemImageWidth))
        ]) {
            ForEach(MockItemFactory.albums) { album in
                NavigationLink(destination: AlbumDetailView(album: album)) {
                    HStack {
                        ImageItemView(image: Image(album.imageURLString), type: .two) {
                            Text(album.title).vibeTitle3()
                            Text(album.artist).vibeMainText()
                        }
                    }
                }
            }
        }
    }
}

extension LibraryAlbumView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        @Published private(set) var artists: [Artist] = []
        private var subscriptions: Set<AnyCancellable> = []

        init(container: DIContainer) {
            self.container = container
        }
    }
}
