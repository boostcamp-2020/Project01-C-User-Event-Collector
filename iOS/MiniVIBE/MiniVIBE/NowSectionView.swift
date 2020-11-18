//
//  NowSectionView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct NowSectionView: View {
    var body: some View {
        ZStack {
            Color.black
            
            VStack(alignment: .leading ) {
                HStack {
                    Image("home-now")
                        .renderingMode(/*@START_MENU_TOKEN@*/.template/*@END_MENU_TOKEN@*/)
                        .resizable()
                        .scaledToFit()
                        .frame(width: 100, height: 30, alignment: .center)
                        .foregroundColor(.pink)
                    Text("다시듣기").font(.title)
                }.padding(.leading)
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack {
                        VStack(alignment: .leading) {
                            Image("now-dummy1")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 230, height: 300, alignment: .leading).aspectRatio(contentMode: .fit)
                            Text("야간작업실")
                        }
                        VStack(alignment: .leading) {
                            Image("now-dummy2")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 230, height: 300, alignment: .leading).aspectRatio(contentMode: .fit)
                            Text("어벤걸스")
                        }
                    }
                    .padding(.leading)
                }.statusBar(hidden: true)
            }
        }
        
    }
}

struct NowSectionView_Previews: PreviewProvider {
    static var previews: some View {
        NowSectionView()
    }
}
