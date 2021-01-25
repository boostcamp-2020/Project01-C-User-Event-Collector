//
//  WebView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/09.
//

import SwiftUI
import AuthenticationServices

class SignInViewModel: NSObject, ObservableObject, ASWebAuthenticationPresentationContextProviding {
    typealias ASPresentationAnchor = UIWindow
 
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return ASPresentationAnchor()
    }
}
