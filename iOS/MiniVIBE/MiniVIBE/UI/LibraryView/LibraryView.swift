//
//  LibraryView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/06.
//

import SwiftUI

struct LibraryView: View {
    @ObservedObject var viewModel: ViewModel = ViewModel()
    
    private enum Constant {
        static let title: String = "보관함"
    }
    
    var body: some View {
        NavigationView {
            ZStack {
                Color.black.edgesIgnoringSafeArea(.top)
                VStack {
                    libraryHeaderView
                    upperTab
                    lowerTab.frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: .infinity)
                }.padding(.bottom, NowPlayingBarView.height)
            }.navigationBarHidden(true)
        }
    }
}

private extension LibraryView {
    var lowerTab: some View {
        TabView(selection: $viewModel.selectedTab) {
            LibrarySongView().tag(0)
            LibraryArtistView().tag(1)
            LibraryAlbumView().tag(2)
            LibraryPlaylistView().tag(3)
        }
        .animation(.easeInOut)
        .tabViewStyle(PageTabViewStyle(indexDisplayMode: .never))
    }
}

private extension LibraryView {
    var upperTab: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            ScrollViewReader { reader in
                HStack {
                    ForEach(viewModel.tabNameList.indices) { index in
                        Text(viewModel.tabNameList[index])
                            .id(index)
                            .font(.title)
                            .background(Color.black)
                            .foregroundColor(viewModel.selectedTab == index ? .white : .gray)
                            .padding(.bottom, 3).background(viewModel.selectedTab == index ? Color.vibePink : nil)
                            .onTapGesture {
                                viewModel.selectedTab = index
                            }
                            .onChange(of: viewModel.selectedTab) { value in
                                withAnimation {
                                    reader.scrollTo(value, anchor: .center)
                                }
                            }
                    }
                }
            }
        }.background(Color.black)
        .padding(.horizontal, .defaultPadding)
    }
}

extension LibraryView {
    class ViewModel: ObservableObject {
        @Published var selectedTab: Int = 0
        var tabNameList = ["노래", "아티스트", "앨범", "플레이리스트"]
        
        func moveTab(to target: Int) {
            selectedTab = target
        }
    }
}

extension LibraryView {
    var libraryHeaderView: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
            Button(action: {}, label: {
                Image(systemName: "gear").vibeTitle2()
            })
        }.padding()
    }
}

struct LibrarySongView: View {
    var body: some View {
        ScrollView {
            LazyVGrid(
                columns: [.init(.fixed(.oneItemImageWidth))],
                pinnedViews: [.sectionHeaders]
            ) {
                Section(header: PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})) {
                    ForEach(MockItemFactory.imageURLSongs) { song in
                        HStack {
                            AsyncImageView(url: song.imageURLString)
                                .frame(width: 40, height: 40, alignment: .center)
                            VStack(alignment: .leading, spacing: .defaultSpacing) {
                                Text(song.title).vibeTitle3()
                                Text(song.artist).vibeMainText()
                            }
                            Spacer()
                            Button(action: {
                                
                            }, label: {
                                Image(systemName: "heart.fill")
                            })
                        }.padding(.horizontal, .defaultPadding)
                    }
                }
            }
        }.animation(.none)
    }
}

struct LibraryPlaylistView: View {
    var body: some View {
        ScrollView {
            LazyVStack {
                ForEach(MockItemFactory.playlists) { playlist in
                    NavigationLink(destination: PlaylistDetailView(playlist: playlist)) {
                        HStack {
                            Image(playlist.imageURLString)
                                .resizable()
                                .frame(width: 100, height: 100, alignment: .center)
                            VStack(alignment: .leading, spacing: .defaultSpacing) {
                                Text(playlist.title).vibeTitle3()
                                playlist.description.map({Text($0).vibeMainText().lineLimit(1)})
                                Text(playlist.subtitle).vibeMainText()
                            }
                            Spacer()
                        }
                    }
                }
            }
        }
    }
}

struct LibraryArtistView: View {
    var body: some View {
        ScrollView {
            LazyVGrid(
                columns: [.init(.fixed(.oneItemImageWidth))],
                pinnedViews: [.sectionHeaders]) {
                Section(header: PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})) {
                    ForEach(MockItemFactory.artists) { artist in
                        HStack {
                            Image(artist.imageURLString)
                                .resizable()
                                .frame(width: 50, height: 50, alignment: .center)
                                .clipShape(Circle())
                            Text(artist.name).vibeTitle3()
                            Spacer()
                        }.padding(.horizontal, .defaultPadding)
                    }
                }
            }
        }.animation(.none)
    }
}

struct LibraryAlbumView: View {
    var body: some View {
        LazyVGrid(columns: [.init(.fixed(.twoItemImageWidth)),
                             .init(.fixed(.twoItemImageWidth))
                            ]) {
            ForEach(MockItemFactory.albums) { album in
                HStack {
                    ImageItemView(image: Image(album.imageURLString), type: .two) {
                        Text(album.title).vibeTitle3()
                        Text(album.artist).vibeMainText()
                    }
                }
            }
        }
    }
}
