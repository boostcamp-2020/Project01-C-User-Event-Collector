//
//  ContentView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import CoreData

struct ContentView: View {
    
    var body: some View {
        TabView {
            HomeView()
                .tabItem {
                    Image(systemName: "house")
                }
            Text("Another Tab")
                .tabItem {
                    Image(systemName: "chart.bar.doc.horizontal")
                }
            Text("The Last Tab")
                .tabItem {
                    Image(systemName: "play.rectangle.fill")
                }
            Text("Another Tab")
                .tabItem {
                    Image(systemName: "magnifyingglass")
                }
            Text("The Last Tab")
                .tabItem {
                    Image(systemName: "person.fill")
                }
        }.accentColor(.pink)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
