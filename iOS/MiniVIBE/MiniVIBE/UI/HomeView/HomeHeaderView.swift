//
//  HomeHeaderView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import SwiftUI

struct HomeHeaderView: View {
    private enum Constant {
        static let title: String = "#내돈내듣 VIBE"
    }

    var body: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
            Image(systemName: "person.fill")
                .resizable()
                .frame(width: 20, height: 20, alignment: .center)
                .padding(10)
                .background(Color(.systemGray4))
                .clipShape(Circle())
                .foregroundColor(Color(.systemGray2))
        }.padding()
    }
}

struct HomeHeaderView_Previews: PreviewProvider {
    static var previews: some View {
        HomeHeaderView()
            .previewLayout(.sizeThatFits)
    }
}
