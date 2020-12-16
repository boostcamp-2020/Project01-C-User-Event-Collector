//
//  LibraryView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/06.
//

import SwiftUI
import Combine
import BCEventEmitter

struct LibraryView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @StateObject var viewModel: ViewModel
    @Binding var colorMode: Bool
    private enum Constant {
        static let title: String = "보관함"
    }
    
    var body: some View {
        ZStack {
            NavigationView {
                ZStack {
                    Color.vibeBackground.ignoresSafeArea(edges: .top)
                    VStack {
                        libraryHeaderView
                        upperTab
                        lowerTab.frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: .infinity)
                    }.padding(.bottom, NowPlayingBarView.height)
                }.navigationBarHidden(true)
            }
            NowPlayingBarView(musicPlayer: musicPlayer)
        }.onAppear {
            emitEvent(event: MoveEvent(next: ContentView.TabType.libarary.description))
        }
    }
}

private extension LibraryView {
    var lowerTab: some View {
        TabView(selection: $viewModel.selectedTab) {
            LibrarySongView().tag(0)
            LibraryArtistView(viewModel: LibraryArtistView.ViewModel(container: viewModel.container )).tag(1)
            LibraryAlbumView(viewModel: LibraryAlbumView.ViewModel(container: viewModel.container)).tag(2)
            LibraryPlaylistView(viewModel: PlaylistSectionView.ViewModel(container: viewModel.container, id: 123, title: "보관함", type: .normal) ).tag(3)
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
                            .background(Color.vibeBackground)
                            .foregroundColor(viewModel.selectedTab == index ? .vibeTitle : .gray)
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
        }.background(Color.vibeBackground)
        .padding(.horizontal, .defaultPadding)
    }
}

enum LibraryType: Int {
    case song = 0
    case artist = 1
    case album = 2
    case playlist = 3
    
    var description: String {
        let base: String = "LibraryView"
        switch self {
        case .song:
            return "\(base)/Song"
        case .artist:
            return "\(base)/Artist"
        case .album:
            return "\(base)/Album"
        case .playlist:
            return "\(base)/Playlist"
            
        }
    }
}

extension LibraryView {
    class ViewModel: ObservableObject {
        @Published var selectedTab: Int = 0 {
            didSet(oldValue) {
                emitEvent(event: MoveEvent(next: LibraryType(rawValue: selectedTab)?.description ?? "error"))
            }
        }
        var tabNameList = ["노래", "아티스트", "앨범", "플레이리스트"]
        let container: DIContainer
        
        init(container: DIContainer) {
            self.container = container
        }
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
            Button(action: {
                colorMode.toggle()
            }, label: {
                Image(systemName: "gear").vibeTitle2()
            })
        }.padding()
    }
}
