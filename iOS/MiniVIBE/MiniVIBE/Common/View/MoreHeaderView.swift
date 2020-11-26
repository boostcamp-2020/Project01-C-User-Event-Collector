//
//  MoreHeaderView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct MoreHeaderView: View {
    let title: String
    var body: some View {
        HStack {
            Text(title).vibeTitle2()
            Spacer()
            Text("더보기")
                .vibeMainText()
        }
    }
}

struct MoreHeaderView_Previews: PreviewProvider {
    static var previews: some View {
        MoreHeaderView(title: "test")
            .background(Color.black)
    }
}
