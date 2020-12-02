//
//  ChartHeaderView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct ChartHeaderView: View {
    private enum Constant {
        static let title: String = "차트"
    }

    var body: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
        }.padding()
    }
}

struct ChartHeaderView_Previews: PreviewProvider {
    static var previews: some View {
        ChartHeaderView()
    }
}
