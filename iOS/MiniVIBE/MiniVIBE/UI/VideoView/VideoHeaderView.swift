//
//  VideoHeaderView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct VideoHeaderView: View {
    private enum Constant {
        static let title: String = "비디오"
    }

    var body: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
        }.padding()
    }
}
