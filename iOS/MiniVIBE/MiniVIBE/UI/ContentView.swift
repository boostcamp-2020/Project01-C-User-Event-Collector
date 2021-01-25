//
//  ContentView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import CoreData
import BCEventEmitter

struct ContentView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
    @State var colorMode: Bool = true
    @StateObject var viewModel: ViewModel
    var body: some View {
        Group {
            GeometryReader { proxy in
                setBaseWidthIfPassed(geometryproxy: proxy)
            TabView(selection: $viewModel.selectedTab) {
                TabSyncView(selection: $viewModel.selectedTab, tag: TabType.today) {
                    TodayView(viewModel: TodayView.ViewModel(container: viewModel.container))
                }
                .tabItem {
                    Image(systemName: "house")
                }.tag(TabType.today)
                TabSyncView(selection: $viewModel.selectedTab, tag: TabType.chart) {
                    ChartView(viewModel: ChartView.ViewModel(container: viewModel.container))
                }
                .tabItem {
                    Image(systemName: "chart.bar.doc.horizontal")
                }.tag(TabType.chart)
                TabSyncView(selection: $viewModel.selectedTab, tag: TabType.video) {
                    VideoView(viewModel: VideoView.ViewModel(container: viewModel.container))
                }
                .tabItem {
                    Image(systemName: "play.rectangle.fill")
                }.tag(TabType.video)
                TabSyncView(selection: $viewModel.selectedTab, tag: TabType.search) {
                    SearchView()
                }
                .tabItem {
                    Image(systemName: "magnifyingglass")
                }.tag(TabType.search)
                TabSyncView(selection: $viewModel.selectedTab, tag: TabType.libarary) {
                    LibraryView(viewModel: LibraryView.ViewModel(container: viewModel.container), colorMode: $colorMode)
                }
                .tabItem {
                    Image(systemName: "person.fill")
                }.tag(TabType.libarary)
            }
            }.accentColor(.vibePink)
        }.preferredColorScheme(colorMode == true ? .dark : .light)
        .navigationViewStyle(StackNavigationViewStyle())
    }
    
    func setBaseWidthIfPassed(geometryproxy: GeometryProxy) -> EmptyView {
        CGFloat.setBaseWidth(value: geometryproxy.size.width)
           return EmptyView()
       }
}

extension ContentView {
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

extension ContentView {
    struct TabSyncView<Content: View>: View {
        @Binding var selection: ContentView.TabType
        var tag: TabType
        var content: () -> Content
        @ViewBuilder
        var body: some View {
            if selection == tag {
                content()
            } else {
                Spacer()
            }
        }
    }
}
