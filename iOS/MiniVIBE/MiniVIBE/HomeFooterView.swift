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
            FooterText("네이버(주) 사업자 정보 ⌵")
            HStack {
                FooterText("개인정보 처리방침")
                FooterDivider()
                FooterText("오류신고 및 결제관련 문제해결")
            }
            HStack {
                FooterText("고객센터")
                FooterDivider()
                FooterText("톡톡상담")
                FooterDivider()
                FooterText("네이버 이용약관")
                FooterDivider()
                FooterText("VIBE 이용약관")
            }
        }
    }
}

struct FooterText: View {
    
    var text: String
    init(_ text: String) {
        self.text = text
    }
    var body: some View {
        Text(text).font(.caption).foregroundColor(.white)
    }
    
}

struct FooterDivider: View {
    
    var body: some View {
        Divider().frame(height: 10).overlay(Color.white)
    }
}

struct HomeFooterView_Previews: PreviewProvider {
    static var previews: some View {
        HomeFooterView().background(Color.black)
    }
}
