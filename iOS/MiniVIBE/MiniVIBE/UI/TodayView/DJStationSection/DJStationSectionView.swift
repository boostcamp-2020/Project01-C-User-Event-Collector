//
//  DJStationSectionView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/25.
//

import SwiftUI

struct DJStationSectionView: View {
    private enum Constant {
        static let title: String = "DJ 스테이션"
    }
    
    @State private var items: [DJStationItem] = MockItemFactory.homeDJStationkItems
    var body: some View {
        VStack {
            NavigationLink(destination: DJStationMoreView()
            ) {
                MoreHeaderView(title: Constant.title)
            }.emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.more))
            SectionScrollView {
                ForEach(items) { item in
                    DJStationItemView(item: item)
                }
            }
        }
    }
}
