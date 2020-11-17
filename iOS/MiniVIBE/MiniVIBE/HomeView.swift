//
//  HomeView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        
        List {
            Spacer()
            Hgrid()
            Spacer()
            Hgrid()
            Spacer()
            Hgrid()
            Spacer()
            
        }
    }
}
struct Hgrid: View {
    var body: some View {
        let rows: [GridItem] =
            Array(repeating: .init(.fixed(20)), count: 2)
    ScrollView(.horizontal) {
        LazyHGrid(rows: rows, alignment: .top) {
            ForEach((0...79), id: \.self) {
                let codepoint = $0 + 0x1f600
                let codepointString = String(format: "%02X", codepoint)
                Text("\(codepointString)")
                    .font(.footnote)
                let emoji = String(Character(UnicodeScalar(codepoint)!))
                Text("\(emoji)")
                    .font(.largeTitle)
            }
        }
    }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
