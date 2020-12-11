//
//  ContentView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import CoreData

struct ContentView: View {
    @StateObject var viewModel: ViewModel
    @State var playerFrame = CGRect.zero
    let playingBar = NowPlayingBarView()
    var body: some View {
            TabView(selection: $viewModel.selectedTab) {
                TodayView(viewModel: TodayView.ViewModel(container: viewModel.container))
                 
                    .tabItem {
                        Image(systemName: "house")
                    }.tag(TabType.today)
                ChartView(viewModel: ChartView.ViewModel(container: viewModel.container))
                    .tabItem {
                        Image(systemName: "chart.bar.doc.horizontal")
                    }.tag(TabType.chart)
                VideoView(viewModel: VideoView.ViewModel(container: viewModel.container))
                  
                    .tabItem {
                        Image(systemName: "play.rectangle.fill")
                    }.tag(TabType.video)
                SearchView()
                .tabItem {
                    Image(systemName: "magnifyingglass")
                }.tag(TabType.search)
                LibraryView(viewModel: LibraryView.ViewModel(container: viewModel.container))
                .tabItem {
                    Image(systemName: "person.fill")
                }.tag(TabType.libarary)
            }.accentColor(.vibePink)
            .onPreferenceChange(Size.self, perform: { value in
                playerFrame = value.last ?? .zero
            })
            .overlay(
                playingBar.position(x: playerFrame.midX, y: playerFrame.height - (NowPlayingBarView.height / 2))
            .preferredColorScheme(.dark))
    }
}

enum TabType: CustomStringConvertible {
    case today
    case chart
    case video
    case search
    case libarary
    
    var description: String {
        switch self {
        case .today:
           return "Today"
        case .chart:
            return "Chart"
        case .video:
            return "Video"
        case .search:
            return "Search"
        case .libarary:
            return "Library"
        }
    }
}

extension ContentView {
    final class ViewModel: ObservableObject {
        let localRepository: LocalRepository
        var container: DIContainer
        @Published var selectedTab = TabType.today {
            didSet {
                emitEvent(event: TapEvent(component: "ContentView", target: .custom("\(selectedTab.description) tab")))
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
