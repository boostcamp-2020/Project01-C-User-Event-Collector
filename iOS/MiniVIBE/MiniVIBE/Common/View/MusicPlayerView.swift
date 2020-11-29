//
//  MusicPlayerView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/29.
//

import SwiftUI

struct MusicPlayerView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading) {
                HStack {
                    Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                        Image(systemName: "gear")
                            .padding(.leading)
                    })
                    Spacer()
                    Text("앨범 이름").vibeTitle2()
                    Spacer()
                    Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                        Image(systemName: "chevron.down")
                            .padding(.trailing)
                    })
                }
                Image("newAlbum-dummy3").resizable().padding()
                Image("newAlbum-dummy3").resizable().padding()
                Image("newAlbum-dummy3").resizable().padding()
                Text("곡이름").vibeTitle2()
                Text("가수이름").vibeMainText()
            }.padding(.defaultPadding)
        }
    }
}

struct MusicPlayerView_Previews: PreviewProvider {
    static var previews: some View {
        MusicPlayerView().background(Color.black).edgesIgnoringSafeArea(.top)
    }
}
