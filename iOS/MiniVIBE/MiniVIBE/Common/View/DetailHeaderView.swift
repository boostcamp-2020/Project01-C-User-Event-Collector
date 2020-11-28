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
        .overlay(Text(title).vibeTitle2())
    }
}
