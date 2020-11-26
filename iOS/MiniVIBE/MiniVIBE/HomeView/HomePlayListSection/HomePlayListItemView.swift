//
//  HomePlayListItemView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct HomePlayListItemView: View {
    var item: HomePlayListItem
    var body: some View {
        ImageItemView(image: Image(item.image), type: .two) {
            Text(item.title).bold().vibeTitle3()
            Text(item.description ?? "").vibeMainText()
        }
    }
}
