//
//  DetailHeaderView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/29.
//

import SwiftUI

struct DetailHeaderView: View {
    @Environment(\.presentationMode) var presentation
    let title: String
    let subtitle: String?
    var body: some View {
        HStack {
            Button(action: {
                self.presentation.wrappedValue.dismiss()
            }, label: {
                Image(systemName: "chevron.left")
                    .vibeTitle2()
            })
            Spacer()
        }.padding(.defaultPadding)
        .overlay(
            VStack {
            Text(title).vibeTitle2()
                subtitle.map({ Text($0).vibeTitle3() })
            })
    }
    
    init(title: String, subtitle: String? = nil) {
        self.title = title
        self.subtitle = subtitle
    }
}
