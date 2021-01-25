//
//  MoreHeaderView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct MoreHeaderView: View {
    let title: String
    let subtitle: String?
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            HStack {
                Text(title).vibeTitle2()
                Spacer()
                Text("더보기")
                    .vibeMainText()
            }
            subtitle.map({ Text($0).vibeMainText() })
        }.padding(EdgeInsets(top: 5, leading: .defaultPadding, bottom: 5, trailing: .defaultPadding))
    }
    
    init(title: String, subtitle: String? = nil) {
        self.title = title
        self.subtitle = subtitle
    }
}

struct MoreHeaderView_Previews: PreviewProvider {
    static var previews: some View {
        MoreHeaderView(title: "test")
            .background(Color.vibeBackground)
    }
}
