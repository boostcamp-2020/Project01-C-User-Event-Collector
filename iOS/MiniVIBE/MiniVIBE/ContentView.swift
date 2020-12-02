//
//  ContentView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import CoreData

struct ContentView: View {
    @EnvironmentObject var viewModel: ViewModel
    var playingBar = NowPlayingBarView()
    var musicPlayer = MusicPlayer()
    var body: some View {
        TabView(selection: $viewModel.selectedTab) {
            HomeView(playingBar: playingBar)
                .tabItem {
                    Image(systemName: "house")
                }.tag(0)
            ChartView(playingBar: playingBar)
                .tabItem {
                    Image(systemName: "chart.bar.doc.horizontal")
                }.tag(1)
            VideoView(playingBar: playingBar)
                .tabItem {
                    Image(systemName: "play.rectangle.fill")
                }.tag(2)
            Button(action: {
                viewModel.dbRepository.fetchEvent()
            }, label: {
                Text("fetch")
            })
            .tabItem {
                Image(systemName: "magnifyingglass")
            }.tag(3)
            Button(action: {
                viewModel.dbRepository.deleteAllEvent()
            }, label: {
                Text("delete")
            })
            .tabItem {
                Image(systemName: "person.fill")
            }.tag(4)
        }.accentColor(.vibePink)
        .environmentObject(musicPlayer)
    }
}

extension ContentView {
    class ViewModel: ObservableObject {
        let dbRepository: DBRepository
        @Published var selectedTab = 0 {
            didSet {
                let event = dbRepository.newEvent()
                event.tab = Int32(selectedTab)
                dbRepository.saveContext()
            }
        }
        
        init(dbRepository: DBRepository) {
            self.dbRepository = dbRepository
        }
    }
}
