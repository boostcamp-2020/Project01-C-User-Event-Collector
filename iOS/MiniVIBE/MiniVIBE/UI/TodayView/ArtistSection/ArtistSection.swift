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
    @State var isSelected: Bool = false
    let container: DIContainer
    var body: some View {
        Group {
            if isSelected {
                PlaylistSectionView(viewModel: PlaylistSectionView.ViewModel(
                                        container: container, id: 0, title: "나를 위한 믹스테잎", width: .normalItemImageWidth, playlists: [Playlist(id: 4124, imageURLString: "MixTape", title: "두둠칫 믹스테잎", subtitle: "Lil Cherry, GOLDBUUDA", songs: [])]))
            } else {
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
                        Button(Constant.selectButtonName, action: {
                            withAnimation {
                                isSelected = true }
                        })
                        .foregroundColor(.white)
                        .padding(EdgeInsets(top: 10, leading: 30, bottom: 10, trailing: 30))
                        .background(Color.vibePink)
                        .cornerRadius(40)
                    }                .frame(width: Constant.contentWidth, alignment: .center)
                }
                .padding()
            }
        }
    }
}
