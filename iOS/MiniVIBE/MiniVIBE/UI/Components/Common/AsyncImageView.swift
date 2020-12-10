//
//  AsyncImageView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/07.
//

import SwiftUI
import Combine

struct AsyncImageView: View {
    private enum LoadState {
        case loading, success, failure
    }
    
    @ObservedObject private var loader: Loader
    var failure: Image
    var body: some View {
        ZStack {
            selectImage()
                .resizable()
            if loader.state == .loading {
                ProgressView()
            }
        }
    }
    
    init(url: String, loading: Image = Image(systemName: "photo"),
         failure: Image = Image(systemName: "multiply.circle")) {
        loader = Loader(url: url)
        self.failure = failure
    }
}

private extension AsyncImageView {
    func selectImage() -> Image {
        switch loader.state {
        case .loading:
            return Image(uiImage: UIImage())
        case .failure:
            return failure
        default:
            guard let image = loader.image else {
                return failure
            }
            return Image(uiImage: image)
        }
    }
}

private extension AsyncImageView {
    private class Loader: ObservableObject {
        @Published var image: UIImage?
        @Published var state = LoadState.loading
        private var cancellable: AnyCancellable?
        
        init(url: String) {
            if let image = AsyncImageCache.shared[url] {
                self.image = image
                self.state = .success
                return
            }
            cancellable = AsyncImageNetwork.shared.network.execute(ItemRequest(url: URL(string: url)))
                .delay(for: 0.5, scheduler: RunLoop.main)
                .map { UIImage(data: $0) }
                .replaceError(with: nil)
                .receive(on: DispatchQueue.main)
                .sink { [weak self] image in
                    guard let image = image else {
                        self?.state = .failure
                        return
                    }
                    self?.image = image
                    AsyncImageCache.shared[url] = image
                    self?.state = .success
                }
        }
    }
}
