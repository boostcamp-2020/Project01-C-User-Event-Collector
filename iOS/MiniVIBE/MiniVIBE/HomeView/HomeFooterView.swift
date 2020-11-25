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
            Button(action: {}, label: {
                Text("네이버(주) 사업자 정보 ⌵").vibeMainText()
            })
            HStack {
                Button(action: {}, label: {
                    Text("개인정보 처리방침").vibeMainText()
                })
                FooterDivider
                Button(action: {}, label: {
                    Text("오류신고 및 결제관련 문제해결").vibeMainText()
                })
            }
            HStack {
                Button(action: {}, label: {
                    Text("고객센터").vibeMainText()
                })
                FooterDivider
                Button(action: {}, label: {
                    Text("톡톡상담").vibeMainText()
                })
                FooterDivider
                Button(action: {}, label: {
                    Text("네이버 이용약관").vibeMainText()
                })
                FooterDivider
                Button(action: {}, label: {
                    Text("VIBE 이용약관").vibeMainText()
                })
            }
        }
    }
}

var FooterDivider: some View {
    Divider().frame(height: 10).overlay(Color.gray)
}

struct HomeFooterView_Previews: PreviewProvider {
    static var previews: some View {
        HomeFooterView().background(Color.black)
    }
}
