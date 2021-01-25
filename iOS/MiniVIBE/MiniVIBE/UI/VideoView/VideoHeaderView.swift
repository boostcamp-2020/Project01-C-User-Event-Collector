//
//  VideoHeaderView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/03.
//

import SwiftUI

struct VideoHeaderView: View {
    private enum Constant {
        static let title: String = "비디오"
    }

    let viewModel: VideoHeaderView.ViewModel
    var body: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
            NavigationLink(destination: MockServerView(
                            viewModel: MockServerView.ViewModel(container: viewModel.container))) {
                HStack {
                    Text("MockServer")
                Image(systemName: "checkmark.seal.fill")
                }
            }
        }.padding()
    }
}

extension VideoHeaderView {
    final class ViewModel: ObservableObject {
        let container: DIContainer
        
        init(container: DIContainer) {
            self.container = container
        }
    }
}
