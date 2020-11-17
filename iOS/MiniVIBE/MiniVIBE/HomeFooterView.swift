//
//  HomeFooterView.swift
//  MiniVIBE
//
//  Created by 최광현 on 2020/11/17.
//

import SwiftUI

struct HomeFooterView: View {
    var body: some View {
        VStack {
            Text("네이버(주) 사업자 정보 ⌵")
            HStack {
                Text("개인정보 처리방침")
                Divider().frame(height: 15)
                Text("오류신고 및 결제관련 문제해결")
            }
            HStack {
                Text("고객센터")
                Divider().frame(height: 15)
                Text("톡톡상담")
                Divider().frame(height: 15)
                Text("네이버 이용약관")
                Divider().frame(height: 15)
                Text("VIBE 이용약관")
            }
            Text("© NAVER Corp.")
        }
    }
}

struct HomeFooterView_Previews: PreviewProvider {
    static var previews: some View {
        HomeFooterView()
    }
}
