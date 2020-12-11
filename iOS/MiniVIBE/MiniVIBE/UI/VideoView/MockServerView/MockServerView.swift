//
//  MockServerView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI

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
            MockServerDataView(viewModel: viewModel)
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
    let viewModel: MockServerView.ViewModel
    var body: some View {
        VStack {
            Text("Server Repository Data").font(.title2)
            Button(action: {
                self.presentation.wrappedValue.dismiss()
            }, label: {
              Text("Dismiss")
            })
            List {
                ForEach(FakeServerRepository.events) { event in
                    Text("\(event.date)\n\(event.name)\n" + (event.parameters?.description ?? "") )
                }
            }
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
                    Text("\(event.date) " + (event.name))
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
