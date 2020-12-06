//
//  ContentView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import CoreData

struct ContentView: View {
    @ObservedObject private(set) var  viewModel: ViewModel
    @State var playerFrame = CGRect.zero
    var playingBar = NowPlayingBarView()
    var body: some View {
        
            TabView(selection: $viewModel.selectedTab) {
                HomeView()
                    .tabItem {
                        Image(systemName: "house")
                    }.tag(0)
                ChartView()
                    .tabItem {
                        Image(systemName: "chart.bar.doc.horizontal")
                    }.tag(1)
                VideoView()
                    .tabItem {
                        Image(systemName: "play.rectangle.fill")
                    }.tag(2)
                VStack {
                    Text(viewModel.container.eventService.reachability.isConnected ? "o" : "x").onChange(of: viewModel.container.eventService.reachability.isConnected, perform: { value in
                        print(value)
                    })
                    }
                    .tabItem {
                        Image(systemName: "magnifyingglass")
                }.tag(3)
                Button(action: {
                    viewModel.localRepository.deleteAllEvent()
                }, label: {
                    Text("delete")
                })
                .tabItem {
                    Image(systemName: "person.fill")
                }.tag(4)
            }.accentColor(.vibePink)
            .environmentObject(viewModel.container.musicPlayer)
            .onPreferenceChange(Size.self, perform: { value in
                playerFrame = value.last ?? .zero
            })
            .overlay(
                playingBar.position(x: playerFrame.midX, y: playerFrame.height - (NowPlayingBarView.height / 2)))
    }
}

extension ContentView {
    class ViewModel: ObservableObject {
        let localRepository: LocalRepository
        var container: DIContainer
        @Published var selectedTab = 0 {
            didSet {
                container.eventService.send(event: Event(name: "tabChanged", parameter: [:], tab: selectedTab))
            }
        }
        
        init(container: DIContainer) {
            self.container = container
            self.localRepository = container.localRepository
        }
    }
}

struct Size: PreferenceKey {
    typealias Value = [CGRect]
    static var defaultValue: [CGRect] = []
    static func reduce(value: inout [CGRect], nextValue: () -> [CGRect]) {
        value.append(contentsOf: nextValue())
    }
}
