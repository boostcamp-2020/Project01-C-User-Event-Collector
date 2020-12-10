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
    
    let viewModel = ViewModel()
    var body: some View {
        HStack {
            Text(Constant.title).vibeTitle1()
            Spacer()
            Button(action: {
                viewModel.signIn()
            }, label: {            Image(systemName: "person.fill")
                .resizable()
                .frame(width: 20, height: 20, alignment: .center)
                .padding(10)
                .background(Color(.systemGray4))
                .clipShape(Circle())
                .foregroundColor(Color(.systemGray2))})
        }.padding()
    }
}

extension TodayHeaderView {
    class ViewModel {
        var subscriptions: Set<AnyCancellable> = []
        let test = ShimViewController()
        func signIn() {
            let signInPromise = Future<URL, Error> { [weak self] completion in
                let session = ASWebAuthenticationSession(url: URL(string: "http://115.85.181.152:8000/api/auth/login")!,
                                                         callbackURLScheme: "minivibe") { (url, error) in
                    if let error = error {
                        completion(.failure(error))
                    } else if let url = url {
                        let oauthToken = NSURLComponents(string: (url.absoluteString))?.queryItems?.filter({$0.name == "token"}).first
                                // Do what you now that you've got the token, or use the callBack URL
                                print(oauthToken ?? "No OAuth Token")
                        completion(.success(url))
                        print(url)
                    }
                }
                session.presentationContextProvider = self?.test
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
class ShimViewController: UIViewController, ASWebAuthenticationPresentationContextProviding {
    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return ASPresentationAnchor()
    }
}
