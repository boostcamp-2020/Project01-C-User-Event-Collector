//
//  SearchView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI

struct SearchView: View {
    private enum Constant {
        static let title: String = "검색"
    }
    
    @State var text: String = ""
    @State private var isEditing = false
    
    var body: some View {
        NavigationView {
            ZStack {
                Color.vibeBackground.ignoresSafeArea(edges: .top)
                ScrollView(.vertical, showsIndicators: false) {
                    chartHeaderView
                    LazyVGrid(
                        columns: [.init(.fixed(UIScreen.main.bounds.width))],
                        pinnedViews: [.sectionHeaders]
                    ) {
                        Section(header: searchView) {
                            if isEditing {
                            } else {
                                genreSection
                            }
                        }
                    }.padding(.bottom, NowPlayingBarView.height)
                }.padding(.top)
            }.navigationBarHidden(true)
        }
        .onAppear {
            emitEvent(event: MoveEvent(next: TabType.search.description))
        }
    }
}

private extension SearchView {
    var chartHeaderView: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
        }.padding()
    }
}

private extension SearchView {
    var searchView: some View {
        HStack {
            TextField("검색어를 입력해주세요", text: $text)
                .accentColor(Color.white)
                .padding(7)
                .padding(.horizontal, 25)
                .background(Color(.systemGray6))
                .cornerRadius(8)
                .padding(EdgeInsets(top: 0, leading: .defaultPadding, bottom: 5, trailing: .defaultPadding))
                .onTapGesture {
                    withAnimation(Animation.easeOut(duration: 0.5)) {
                        self.isEditing = true
                    }
                }.background(Color.vibeBackground)
            if isEditing {
                Button(action: {
                    withAnimation(Animation.easeOut(duration: 0.5)) {
                        self.isEditing = false
                        UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder),
                                                        to: nil, from: nil, for: nil)
                        self.text = ""
                    }
                }, label: {
                    Text("Cancel").vibeTitle3()
                })
                .padding(.trailing, 10)
                .transition(.move(edge: .trailing))
                .animation(.default)
            }
        }
    }
}

private extension SearchView {
    var genreSection: some View {
        VStack {
            SectionScrollView {
                NewsItemView(item: MockItemFactory.newsItems[0])
                ForEach(MockItemFactory.newsItems) { news in
                    NewsItemView(item: news)
                }
            }.padding(.bottom, .defaultPadding)
            VStack {
                HStack {
                    Text("장르").vibeTitle2()
                    Spacer()
                }
                GenreSectionView()
            }.padding(.horizontal, .defaultPadding)
        }
    }
}
