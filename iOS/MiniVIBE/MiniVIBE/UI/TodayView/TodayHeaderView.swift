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
import BCEventEmitter

struct TodayHeaderView: View {
    private enum Constant {
        static let title: String = "#내돈내듣 VIBE"
    }
    
    @StateObject var viewModel = ViewModel()
    @State var isAlertPresented = false
    var body: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
            Button(action: {
                if !viewModel.isLogin {
                    viewModel.signIn()
                } else {
                    isAlertPresented.toggle()
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
                .foregroundColor(Color(.systemGray2))}
            )
            .alert(isPresented: $isAlertPresented, content: { self.logoutAlert })
            .emitEventIfTapped(event: TapEvent(component: Self.name, target: TapEvent.Target.login))
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
                let session = ASWebAuthenticationSession(url: URL(string: "http://115.85.181.152:8000/api/auth2/login")!,
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
                        emitEvent(event: LoginEvent())
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
            }, receiveValue: { _ in
            }).store(in: &subscriptions)
        }
    }
}

extension TodayHeaderView {
    var logoutAlert: Alert {
        Alert(title: Text("로그아웃"),
            message: Text("로그아웃 하시겠습니까?"),
            primaryButton: .default(Text("네"), action: {
                viewModel.isLogin = false
                KeyChain.shared.deleteToken()
                emitEvent(event: LoginEvent())
            }),
            secondaryButton: .default(Text("아니오"))
        )
    }
}

extension TodayHeaderView {
    final class WebViewController: UIViewController, ASWebAuthenticationPresentationContextProviding {
        func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
            return ASPresentationAnchor()
        }
    }
}
