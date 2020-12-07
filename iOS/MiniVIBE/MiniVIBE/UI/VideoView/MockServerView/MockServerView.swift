//
//  MockServerView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI

struct MockServerView: View {
    let viewModel: MockServerView.ViewModel
    @State private var showServer = false
    @State private var showLocal = false
    @State private var isServerEnabled = true
    var body: some View {
        VStack {
            Text("TestServer View").vibeTitle1()
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
                    Text("\(event.date) " + (event.name ?? "") + ("\(event.tab)"))
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
                    Text("\(event.date) " + (event.name ?? "") + ("\(event.tab)"))
                }
            }
        }
    }
}

extension MockServerView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        init(container: DIContainer) {
            self.container = container
        }
    }
}
