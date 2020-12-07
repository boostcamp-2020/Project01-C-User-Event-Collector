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
                ScrollView(.vertical, showsIndicators: false) {
                    libraryHeaderView
                    ScrollView {
                        upperTab
                        lowerTab
                    }.padding(.bottom, NowPlayingBarView.height)
                }.padding(.defaultPadding)
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
        .animation(.default)
        .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height - 350)
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
            PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})
            LazyVStack {
                ForEach(MockItemFactory.songItems) { song in
                    HStack {
                        Image(song.imageURLString)
                            .resizable()
                            .frame(width: 100, height: 100, alignment: .center)
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
            PlayShuffleHeaderButton(playHandler: {}, shuffleHandler: {})
            LazyVStack {
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
    }
}

struct LibraryAlbumView: View {
    var body: some View {
        ScrollView {
            LazyVStack(alignment: .leading) {
                ForEach(MockItemFactory.albums.indices.filter {$0 % 2 == 0}, id: \.self) { index in
                    HStack {
                        ImageItemView(image: Image(MockItemFactory.albums[index].imageURLString), type: .two) {
                            Text(MockItemFactory.albums[index].title).vibeTitle3()
                            Text(MockItemFactory.albums[index].artist).vibeMainText()
                        }
                        if index + 1 < MockItemFactory.albums.count {
                            ImageItemView(image: Image(MockItemFactory.albums[index+1].imageURLString), type: .two) {
                                Text(MockItemFactory.albums[index+1].title).vibeTitle3()
                                Text(MockItemFactory.albums[index+1].artist).vibeMainText()
                            }
                        }
                    }
                }
            }
        }
    }
}
