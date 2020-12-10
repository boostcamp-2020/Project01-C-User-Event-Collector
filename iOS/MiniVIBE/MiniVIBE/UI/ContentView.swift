//
//  ContentView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import CoreData
import OSLog

struct ContentView: View {
    @ObservedObject private(set) var viewModel: ViewModel
    @State var playerFrame = CGRect.zero
    let playingBar = NowPlayingBarView()
    var body: some View {
            TabView(selection: $viewModel.selectedTab) {
                TodayView(viewModel: TodayView.ViewModel(container: viewModel.container, path: viewModel.path))
                    .tabItem {
                        Image(systemName: "house")
                    }.tag("Today")
                ChartView(viewModel: ChartView.ViewModel(container: viewModel.container, path: viewModel.path))
                    .tabItem {
                        Image(systemName: "chart.bar.doc.horizontal")
                    }.tag("Chart")
                VideoView(viewModel: VideoView.ViewModel(container: viewModel.container))
                    .tabItem {
                        Image(systemName: "play.rectangle.fill")
                    }.tag("Video")
                SearchView()
                .tabItem {
                    Image(systemName: "magnifyingglass")
                }.tag("Search")
                LibraryView(viewModel: LibraryView.ViewModel(container: viewModel.container))
                .tabItem {
                    Image(systemName: "person.fill")
                }.tag("Library")
            }.accentColor(.vibePink)
            .onPreferenceChange(Size.self, perform: { value in
                playerFrame = value.last ?? .zero
            })
            .overlay(
                playingBar.position(x: playerFrame.midX, y: playerFrame.height - (NowPlayingBarView.height / 2)))
            .preferredColorScheme(.dark)
    }
}

extension ContentView {
    final class ViewModel: ObservableObject {
        let localRepository: LocalRepository
        var path: String {
            return selectedTab
        }
        var container: DIContainer
        
        @Published var selectedTab = "Today" {
            didSet(oldTab) {
                emitEvent(eventName: .movePage, parameter: [.preView: oldTab, .nextView: selectedTab])
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
