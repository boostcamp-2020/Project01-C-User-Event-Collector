//
//  ImageRepository.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/07.
//

import Foundation
import Combine
import UIKit
import SwiftUI
// 1
class AsyncImageBinder: ObservableObject {
    private var subscription: AnyCancellable?
    private var cache = AsyncImageCache.shared
    // 2
    @Published private(set) var image: UIImage?
    // 3
    func load(url: URL) {
        // 1
    if let image: UIImage = cache[url.absoluteString] {
            self.image = image
            return
        }
        subscription = URLSession.shared.dataTaskPublisher(for: url)
                           .map { UIImage(data: $0.data) }
                           .replaceError(with: nil)
                           .handleEvents(receiveOutput: { self.cache[url.absoluteString] = $0 })                 // 2
                           .receive(on: DispatchQueue.main)
                           .assign(to: \.image, on: self)
    }
    func cancel() {
        subscription?.cancel()
    }
}

struct AsyncWebImageView: View {
    private var url: URL
    private var placeHolder: Image
    @ObservedObject var binder = AsyncImageBinder()
    init(url: URL, placeHolder: Image) {
        self.url = url
        self.placeHolder = placeHolder
        self.binder.load(url: self.url)
    }
    var body: some View {
        VStack {
            // 3
            if binder.image != nil {
                Image(uiImage: binder.image!)
                    .renderingMode(.original)
                    .resizable()
            } else {
                placeHolder
            }
        }
        .onAppear {  }
        .onDisappear { self.binder.cancel() }
    
    }
}

struct AsyncWebImageView_Previews: PreviewProvider {
    static let url = URL(string: "https://image.tmdb.org/t/p/original/cDbOrc2RtIA37nLm0CzVpFLrdaG.jpg")!

    static var previews: some View {
        AsyncWebImageView(url: url, placeHolder: Image(systemName: "circle"))
    }
}
