//
//  ContentView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import CoreData

struct ContentView: View {
    @EnvironmentObject var musicPlayer: MusicPlayer
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
            ZStack {
                playingBar.position(x: playerFrame.midX, y: playerFrame.height - (NowPlayingBarView.height / 2)
                )
                if musicPlayer.showMembership {
                    membershipView .onTapGesture {
                        emitEvent(event: TapEvent(component: "membershipView", target: .custom("멤버십 구매")))
                        withAnimation { musicPlayer.showMembership = false }
                    }
                }
            }
        )
    }
}

private extension ContentView {
    var membershipView: some View {
        HStack(alignment: .top) {
            VStack(alignment: .leading, spacing: .defaultSpacing) {
                HStack {
                    Image(systemName: "info.circle.fill")
                    Text("1분 미리듣기")
                }.font(.system(size: 13, weight: .bold))
                Text("다양한 할인 혜택으로 멤버십 구독 후 전체 곡을 재생해 보세요.").font(.system(size: 11, weight: .semibold))
            }
            Spacer()
            Button(action: { withAnimation { musicPlayer.showMembership = false
                emitEvent(event: TapEvent(component: "membershipView", target: .custom("close")))
            } }, label: {Image(systemName: "xmark")})
        }
        .foregroundColor(.white)
        .padding(10)
        .frame(width: .oneItemImageWidth, height: 60)
        .background(LinearGradient(gradient: Gradient(colors: [.red, .vibePink, .purple]), startPoint: .leading, endPoint: .trailing))
        .cornerRadius(5)
        .position(x: playerFrame.midX, y: playerFrame.height - (NowPlayingBarView.height + 35))
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
