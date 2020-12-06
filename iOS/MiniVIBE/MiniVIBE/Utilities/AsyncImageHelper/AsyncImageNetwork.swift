//
//  AsyncImageNetwork.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/07.
//

import Foundation

final class AsyncImageNetwork {
    static let shared: AsyncImageNetwork = AsyncImageNetwork()
    let network: Networking = Network()
}
