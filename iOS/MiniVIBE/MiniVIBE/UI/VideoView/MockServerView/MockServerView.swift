//
//  MockServerView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI
import EventEmitter

struct MockServerView: View {
    @StateObject var viewModel: MockServerView.ViewModel
    @StateObject var reachability = Reachability()
    @State private var showServer = false
    @State private var showLocal = false
    @State private var isServerEnabled = true

    var body: some View {
        VStack {
            Text("TestServer View").vibeTitle1()
            Text("Reachability: " + ( reachability.isConnected ? "O" : "X"))
            Toggle(isOn: $isServerEnabled) {
                Text("isServerEnabled")
            }.padding()
        Button(action: {
            viewModel.container.localRepository.deleteAllEvent()
        }, label: {
            Text("Delete Local Data ")
        })
        Button(action: {
            self.showServer = true
        }, label: {
            Text("Server Repository Data")
        })
        .sheet(isPresented: self.$showServer) {
            MockServerDataView(viewModel: MockServerDataView.ViewModel(container: viewModel.container))
        }
        Button(action: {
            self.showLocal = true
        }, label: {
            Text("Local Repository Data")
        })
        .sheet(isPresented: self.$showLocal) {
            LocalDataView(viewModel: viewModel)
        }
        Button(action: {
            viewModel.container.eventService.sendAllEvents()
        }, label: {
            Text("Send All event to Server")
        })
        }.onChange(
            of: isServerEnabled, perform: { isServerEnabled in
                FakeServerRepository.isEnabled = isServerEnabled
        })
    }
}

private struct MockServerDataView: View {
    @Environment(\.presentationMode) var presentation
    @StateObject var viewModel: MockServerDataView.ViewModel
    var filteredEvents: [Event] {
        switch viewModel.filter {
        case EventName.movePage.description:
            return FakeServerRepository.events.filter {
                $0.name == EventName.movePage.description
            }
        case EventName.tabButton.description:
            return FakeServerRepository.events.filter {
                $0.name == EventName.tabButton.description
            }
        case EventName.error.description :
            return FakeServerRepository.events.filter {
                $0.name == EventName.error.description
            }
        default:
            return FakeServerRepository.events
        }
    }
    var body: some View {
        VStack {
            Text("Server Repository Data").font(.title2)
            Button(action: {
                self.presentation.wrappedValue.dismiss()
            }, label: {
              Text("Dismiss")
            })
            Picker("Numbers", selection: $viewModel.selectorIndex) {
                ForEach(0 ..< viewModel.numbers.count) { index in
                            Text(viewModel.numbers[index]).tag(index)
                        }
            }  .pickerStyle(SegmentedPickerStyle())
            List {
                ForEach(filteredEvents) { event in
                    Text("\(event.date)\n\(event.name)\n" + (event.parameters?.description ?? ""))
                }
            }.animation(.easeIn)
        }
    }
}

extension MockServerDataView {
    final class ViewModel: ObservableObject {
        let numbers = ["All", "Move", "Tap", "Error"]
        @Published var selectorIndex = 0
        var filter: String {
            switch selectorIndex {
            case 1:
                return EventName.movePage.description
            case 2:
                return EventName.tabButton.description
            case 3:
                return EventName.error.description
            default:
                return "name"
            }
        }
        let container: DIContainer
        let eventService: EventService
        
        init(container: DIContainer) {
            self.container = container
            self.eventService = container.eventService
        }
    }
}

private struct LocalDataView: View {
    @Environment(\.presentationMode) var presentation
    let viewModel: MockServerView.ViewModel
    var body: some View {
        VStack {
            Text("Local Repository Data").font(.title2)
            Button(action: {
                self.presentation.wrappedValue.dismiss()
            }, label: {
              Text("Dismiss")
            })
            List {
                ForEach(viewModel.container.localRepository.fetchEvents()) { event in
                    Text("\(event.date) " + (event.name) + (event.parameters?.description ?? ""))
                }
            }
        }
    }
}

extension MockServerView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        let eventService: EventService
        
        init(container: DIContainer) {
            self.container = container
            self.eventService = container.eventService
        }
    }
}
