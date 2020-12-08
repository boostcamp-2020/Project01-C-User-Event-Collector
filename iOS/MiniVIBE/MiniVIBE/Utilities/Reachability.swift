//
//  Reachability.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/06.
//

import Foundation
import Network
import Combine

class Reachability: ObservableObject {
    let monitor = NWPathMonitor()
    @Published var isConnected: Bool = false
    
    init() {
        monitor.start(queue: DispatchQueue.global())
        monitor.pathUpdateHandler = { path in
            DispatchQueue.main.async {
                if path.status == .satisfied {
                    self.isConnected = true
                } else {
                    self.isConnected = false
                }
            }
        }
    }
}
