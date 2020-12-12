//
//  AsyncImageCache.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/07.
//

import SwiftUI

final class AsyncImageCache {
    static let shared = AsyncImageCache()
    private var cache: NSCache = NSCache<NSString, UIImage>()
    subscript(key: String) -> UIImage? {
        get { cache.object(forKey: key as NSString) }
        set(image) { image == nil ?
            self.cache.removeObject(forKey: (key as NSString))
            : self.cache.setObject(image!, forKey: (key as NSString))
        }
    }
}
