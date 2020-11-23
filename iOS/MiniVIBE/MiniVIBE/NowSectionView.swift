//
//  NowSectionView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct NowSectionView: View {
    @State var songItems: [SongItem]
    
    var body: some View {
        VStack(alignment: .leading) {
            HStack {
                Image("home-now")
                    .renderingMode(/*@START_MENU_TOKEN@*/.template/*@END_MENU_TOKEN@*/)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 100, height: 30, alignment: .leading)
                    .foregroundColor(.white)
                Text("다시듣기").font(.system(size: 30)).foregroundColor(.white)
            }.padding(.leading)
            NowSectionScrollView(songItems: $songItems)
        }
    }
}

struct NowSectionScrollView: View {
    @Binding var songItems: [SongItem]
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 20.0) {
                ForEach(songItems, id: \.id) { item in
                    NowSectionItemView(item: item)
                }
            }
            .padding(.horizontal, 10)
        }.statusBar(hidden: true)
        .onAppear { UIScrollView.appearance().isPagingEnabled = true }
    }
}

struct NowSectionItemView: View {
    let imageWidth = (UIScreen.main.bounds.width - 40) / 2
    var item: SongItem
    
    var body: some View {
        VStack(alignment: .leading) {
            item.albumArt
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: imageWidth, height: 250, alignment: .center)
                .clipped()
            Text(item.description).foregroundColor(.white)
        }
    }
}

struct SongItem: Identifiable {
    var id = UUID()
    
    var albumArt: Image
    var description: String
}

struct NowSectionView_Previews: PreviewProvider {
    static var previews: some View {
        NowSectionView(songItems: [
            SongItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
            SongItem(albumArt: Image("now-dummy2"), description: "어벤걸스"),
            SongItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
            SongItem(albumArt: Image("now-dummy2"), description: "어벤걸스")
        ]).background(Color.black)
    }
}
