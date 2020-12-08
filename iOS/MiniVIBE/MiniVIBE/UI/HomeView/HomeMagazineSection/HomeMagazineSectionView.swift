//
//  MagazineSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI
import Combine

struct HomeMagazineSectionView: View {
    @ObservedObject var viewModel: Self.ViewModel

    var body: some View {
        homeMagazineSectionScrollView.onAppear {
            viewModel.load()
        }
    }
}

private extension HomeMagazineSectionView {
    private enum Constant {
        static let title: String = "매거진"
    }
    
    var homeMagazineSectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title)
            SectionScrollView {
                ForEach(viewModel.magazineItems) { item in
                    HomeMagazineItemView(item: item)
                }
            }
        }
    }
}

extension HomeMagazineSectionView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        @Published private(set) var magazineItems: [Magazine] = []
        private var subscriptions: Set<AnyCancellable> = []

        init(container: DIContainer) {
            self.container = container
        }
        
        func load() {
            container.serverRepository.loadMagazine(request: MagazineRequest(url: URL(string: "http://115.85.181.152:8000/api/magazines")))
                .receive(on: DispatchQueue.main)
                .sink { result in
                    switch result {
                    case let .failure(error):
                        print(error)
                    case .finished:
                        print("??")
                    }
                } receiveValue: { [weak self] response in
                    self?.magazineItems = response.data
                }.store(in: &subscriptions)
        }
    }
}

private struct MagazineRequest: RequestProviding {
    var url: URL?
    var method: RequestMethod = .get
    var headers: [String: String]?
    func body() throws -> Data? {
        return nil
    }
}

struct MagazineResponse: Decodable {
    let data: [Magazine]
}
