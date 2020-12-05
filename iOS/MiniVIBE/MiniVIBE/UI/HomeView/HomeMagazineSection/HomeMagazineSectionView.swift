//
//  MagazineSectionView.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/11/24.
//

import SwiftUI

struct HomeMagazineSectionView: View {
    private var magazineItems: [Magazine] = MockItemFactory.magazineItems
    var body: some View {
        homeMagazineSectionScrollView
    }
}

private extension HomeMagazineSectionView {
    private enum Constant {
        static let title: String = "매거진"
    }
    
    var homeMagazineSectionScrollView: some View {
        VStack {
            MoreHeaderView(title: Constant.title)
            SectionScrollView {
                ForEach(magazineItems) { item in
                    HomeMagazineItemView(item: item)
                }
            }
        }
    }
}

struct MagazineSectionView_Previews: PreviewProvider {
    static var previews: some View {
        HomeMagazineSectionView().background(Color.black)
    }
}
