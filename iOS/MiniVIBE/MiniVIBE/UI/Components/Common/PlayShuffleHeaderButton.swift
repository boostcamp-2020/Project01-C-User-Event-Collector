//
//  PlayShuffleHeaderButton.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/05.
//

import SwiftUI

struct PlayShuffleHeaderButton: View {
    private let playHandler: () -> Void
    private let shuffleHandler: () -> Void
    
    var body: some View {
        HStack(spacing: 10) {
            Button(action: playHandler) {
                HStack {
                    Image(systemName: "play.fill")
                        .foregroundColor(.vibeTitle)
                    Text("PLAY").vibeTitle3()
                }
                .padding(10)
                .frame(minWidth: 0, maxWidth: .infinity)
                .background(Color(UIColor.darkGray))
                .cornerRadius(5)                    }
            Button(action: shuffleHandler) {
                HStack {
                    Image(systemName: "shuffle")
                        .foregroundColor(.vibeTitle)
                    Text("SHUFFLE").vibeTitle3()
                }
                .padding(10)
                .frame(minWidth: 0, maxWidth: .infinity)
                .background(Color(UIColor.darkGray))
                .cornerRadius(5)
            }
        }.padding(.defaultPadding)
        .background(Color.vibeBackground)
    }
    init(playHandler: @escaping () -> Void, shuffleHandler: @escaping () -> Void) {
        self.playHandler = playHandler
        self.shuffleHandler = shuffleHandler
    }
}
