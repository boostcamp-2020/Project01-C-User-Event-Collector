//
//  MagazineSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI
import Combine

struct MagazineSectionView: View {
    @StateObject var viewModel: Self.ViewModel
    var body: some View {
        homeMagazineSectionScrollView.onAppear {
            viewModel.load()
        }
    }
}

private extension MagazineSectionView {
    private enum Constant {
        static let title: String = "매거진"
    }
    
    var homeMagazineSectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title)
            SectionScrollView {
                ForEach(viewModel.magazineItems) { item in
                    MagazineItemView(item: item)
                }
            }
        }
    }
}

extension MagazineSectionView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        @Published private(set) var magazineItems: [Magazine] = []
        private var subscriptions: Set<AnyCancellable> = []

        init(container: DIContainer) {
            self.container = container
        }
        
        func load() {
            container.serverRepository.load(type: ItemResponse<[Magazine]>.self, request: ItemRequest(url: URL(string: "http://115.85.181.152:8000/api/magazine")))
                .receive(on: DispatchQueue.main)
                .sink { [weak self] result in
                    switch result {
                    case let .failure(error):
                        self?.magazineItems = [Magazine(id: UUID().hashValue, title: "\(error.localizedDescription)", imageURLString: "error")]
                    case .finished:
                        break
                    }
                } receiveValue: { [weak self] response in
                    self?.magazineItems = response.data
                }.store(in: &subscriptions)
        }
    }
}
