//
//  ArtistSection.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import SwiftUI

struct ArtistSection: View {
    private enum Constant {
        static let title: String = "좋아하는 아티스트를 선택해주세요."
        static let imageName: String = "Artists"
        static let description: String = "매일 새로운 믹스테잎이 업데이트 됩니다."
        static let selectButtonName: String = "선택하기"
        static let contentWidth: CGFloat = UIScreen.main.bounds.width * 0.6
    }
    
    var body: some View {
        VStack {
            HStack {
                Text(Constant.title).vibeTitle2()
                Spacer()
            }
            Group {
                Image(Constant.imageName)
                .resizable()
                .scaledToFill()
                Text(Constant.description).vibeMainText()
                .lineLimit(1)
                .minimumScaleFactor(0.5)
                Button(Constant.selectButtonName, action: {})
                .foregroundColor(.white)
                .padding(EdgeInsets(top: 10, leading: 30, bottom: 10, trailing: 30))
                .background(Color.vibePink)
                .cornerRadius(40)
            }                .frame(width: Constant.contentWidth, alignment: .center)
        }
        .padding()
    }
}

struct ArtistSection_Previews: PreviewProvider {
    static var previews: some View {
        ArtistSection()
            .previewLayout(.fixed(width: 400, height: 300))
            .background(Color.vibeBackground)
    }
}
