//
//  GenreSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI

struct GenreItemView: View {
    var body: some View {
        LazyVGrid(
            columns: [.init(.fixed(.twoItemImageWidth )), .init(.fixed(.twoItemImageWidth ))],
            alignment: .leading,
            spacing: .defaultSpacing
        ) {
            ForEach(0..<30) {_ in
                HStack {
                    Color(MockItemFactory.randomColor).frame(width: 5)
                        .cornerRadius(5)
            Text("K-Pop").vibeTitle3()
                    Spacer()
                }
                .padding(5)
                .frame(width: .twoItemImageWidth, height: 30)
                .background(Color(UIColor.darkGray))
                .cornerRadius(5)

            }
        }
    }
}
