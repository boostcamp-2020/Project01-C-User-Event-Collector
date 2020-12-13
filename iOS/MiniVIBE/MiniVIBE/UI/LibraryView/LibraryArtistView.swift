//
//  LibraryArtistView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/09.
//

import SwiftUI
import Combine

struct LibraryArtistView: View {
    @StateObject var viewModel: Self.ViewModel
    var body: some View {
        ScrollView {
            LazyVGrid(
                columns: [.init(.flexible())],
                pinnedViews: [.sectionHeaders]) {
                Section(header: PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})) {
                    ForEach(viewModel.artists) { artist in
                        HStack {
                            AsyncImageView(url: artist.imageURLString)
                                .frame(width: 50, height: 50, alignment: .center)
                                .clipShape(Circle())
                            Text(artist.name).vibeTitle3()
                            Spacer()
                        }.padding(.horizontal, .defaultPadding)
                    }
                }
            }
            .padding(.horizontal, .defaultPadding)
        }.animation(.none)
        .onAppear {
            viewModel.load()
        }
    }
}

extension LibraryArtistView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        @Published private(set) var artists: [Artist] = []
        private var subscriptions: Set<AnyCancellable> = []

        init(container: DIContainer) {
            self.container = container
        }
        
        func load() {
            container.serverRepository.load(
                type: ItemResponse<[Artist]>.self,
                request: ItemRequest(url: URL(string: "http://115.85.181.152:8000/api//library/artists")))
                .receive(on: DispatchQueue.main)
                .sink { [weak self] result in
                    switch result {
                    case .failure:
                        self?.artists = []
                    case .finished:
                        break
                    }
                } receiveValue: { [weak self] response in
                    self?.artists = response.data
                }.store(in: &subscriptions)
        }
    }
}
