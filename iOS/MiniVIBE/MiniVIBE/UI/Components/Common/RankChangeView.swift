//
//  RankChangeView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/04.
//

import SwiftUI

struct RankChangeView: View {
    private enum Change: String {
        case up
        case down
        case new
    }
    
    private let change: Change?
    
    var body: some View {
        switch change {
        case .up:
            Text("▲").font(.system(size: 10))
                .bold()
                .foregroundColor(.vibePink)
        case .down:
            Text("▼").font(.system(size: 10))
                .bold()
                .foregroundColor(.gray)
        case .new:
            Text("new").font(.system(size: 10))
                .bold()
                .foregroundColor(.vibePink)
        case .none:
            Text("")
                .bold()
                .foregroundColor(.gray)
        }
    }
    
    init(change: String? = nil) {
        switch change {
        case "up":
            self.change = .up
        case "down":
            self.change = .down
        case "new":
            self.change = .new
        case .none:
            self.change = .none
        case .some:
            self.change = .none
        }
    }
}
