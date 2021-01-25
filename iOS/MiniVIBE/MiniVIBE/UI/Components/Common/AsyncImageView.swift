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
            if loader.state == .success {
                selectImage()
                    .resizable()
            }
            if loader.state == .loading {
                ProgressView()
            }
            if loader.state == .failure {
                selectImage()
            }
        }
    }
    
    init(url: String,
         failure: Image = Image(systemName: "multiply.circle")) {
        self.failure = failure
        loader = Loader(url: url)
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
        @Published  var state = LoadState.loading
        private var cancellable: AnyCancellable?
        
        init(url: String) {
            if let image = AsyncImageCache.shared[url] {
                self.image = image
                self.state = .success
                return
            }
            cancellable = AsyncImageNetwork.shared.network.execute(ItemRequest(url: URL(string: url)))
                .map { UIImage(data: $0) }
                .replaceError(with: nil)
                .receive(on: DispatchQueue.main)
                .sink { [weak self] image in
                    guard let image = image else {
                        self?.state = .failure
                        self?.objectWillChange.send()
                        return
                    }
                    self?.image = image
                    AsyncImageCache.shared[url] = image
                    self?.state = .success
                }
        }
    }
}
