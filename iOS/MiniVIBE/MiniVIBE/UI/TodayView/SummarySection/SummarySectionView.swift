//
//  SummarySectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/23.
//

import SwiftUI

struct SummarySectionView: View {

    @StateObject var viewModel: Self.ViewModel
    var body: some View {
        SectionScrollView {
            ForEach(viewModel.items) { item in
                NavigationLink(destination: PlaylistDetailView(viewModel: PlaylistDetailView.ViewModel(container: viewModel.container, playlist: item.playlist))) {
                VStack(alignment: .leading) {
                    Text(item.category)
                        .font(.system(size: 14))
                        .foregroundColor(.vibePink)
                    ImageItemView(image: Image(item.image), width: .largeItemImageWidth, ratio: 0.5) {
                        Text(item.title).vibeTitle2()
                        Text(item.description ?? "").vibeMainText()
                    }
                }
            }
            }
        }
        
    }
}
extension SummarySectionView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        let items: [SummaryItem] = MockItemFactory.homeSummaryItems
        
        init(container: DIContainer) {
            self.container = container
        }
        
    }
}
