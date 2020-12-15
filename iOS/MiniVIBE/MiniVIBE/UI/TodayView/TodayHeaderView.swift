//
//  TodayHeaderView.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/24.
//

import SwiftUI
import AuthenticationServices
import Combine
import WebKit

struct TodayHeaderView: View {
    private enum Constant {
        static let title: String = "#내돈내듣 VIBE"
    }
    
    @StateObject var viewModel = ViewModel()
    var body: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
            Button(action: {
                if !viewModel.isLogin {
                    viewModel.signIn()
                }
            }, label: {
                Group {
                    if viewModel.isLogin {
                        Image("login")
                            .resizable()
                            .frame(width: 30, height: 30, alignment: .center)
                        
                    } else {
                        Image(systemName: "person.fill")
                            .resizable()
                            .frame(width: 20, height: 20, alignment: .center)
                            .padding(10)
                    }
                }
                .background(Color(.systemGray4))
                .clipShape(Circle())
                .foregroundColor(Color(.systemGray2))}).emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.login))
        }.padding()
    }
}

extension TodayHeaderView {
    class ViewModel: ObservableObject {
        var subscriptions: Set<AnyCancellable> = []
        @Published var isLogin: Bool = false
        let webView = TodayHeaderView.WebViewController()
        func signIn() {
            let signInPromise = Future<URL, Error> { [weak self] completion in
                let session = ASWebAuthenticationSession(url: URL(string: "http://115.85.181.152:8000/api/auth/login")!,
                                                         callbackURLScheme: "minivibe") { (url, error) in
                    if let error = error {
                        completion(.failure(error))
                    } else if let url = url {
                        let oauthToken = NSURLComponents(string: (url.absoluteString))?.queryItems?.first?.description
                        guard let token = oauthToken?.description else { return }
                        if KeyChain.shared.readToken() != nil {
                            KeyChain.shared.updateToken(token)
                        } else {
                            KeyChain.shared.createToken(token)
                        }
                        self?.isLogin = true
                        completion(.success(url))
                    }
                }
                session.presentationContextProvider = self?.webView
                session.prefersEphemeralWebBrowserSession = true
                session.start()
            }
            signInPromise.sink(receiveCompletion: { completion in
                switch completion {
                case .failure(let error):
                    print(error.localizedDescription)
                case .finished:
                    break
                }
            }, receiveValue: { (url) in
                print("\(url)")
            }).store(in: &subscriptions)
        }
    }
}

extension TodayHeaderView {
    final class WebViewController: UIViewController, ASWebAuthenticationPresentationContextProviding {
        func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
            return ASPresentationAnchor()
        }
    }
}
