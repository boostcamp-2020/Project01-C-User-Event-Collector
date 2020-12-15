//
//  KeyChain.swift
//  MiniVIBE
//
//  Created by GH Choi on 2020/12/12.
//

import Foundation
import Security

class KeyChain {
    
    static let shared = KeyChain()
    
    private let account = "minivibe"
    private let service = Bundle.main.bundleIdentifier
    
    @discardableResult
    func createToken(_ token: String) -> Bool {
        guard let data = token.data(using: .utf8),
              let service = self.service else { return false }
        let query: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                      kSecAttrService: service,
                                      kSecAttrAccount: account,
                                      kSecAttrGeneric: data]

        return SecItemAdd(query as CFDictionary, nil) == errSecSuccess
    }
    
    @discardableResult
    func updateToken(_ token: String) -> Bool {
        guard let service = self.service else { return false }
        let query: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                        kSecAttrService: service,
                                        kSecAttrAccount: account,
                                        kSecMatchLimit: kSecMatchLimitOne,
                                        kSecReturnAttributes: true,
                                        kSecReturnData: true]
        
        guard let data = token.data(using: .utf8) else { return false }
        let attributes: [CFString: Any] = [kSecAttrAccount: account,
                                           kSecAttrGeneric: data]
        
        return SecItemUpdate(query as CFDictionary, attributes as CFDictionary) == errSecSuccess
    }
    
    func readToken() -> String? {
        guard let service = self.service else { return nil }
        let query: [CFString: Any] = [kSecClass: kSecClassGenericPassword,
                                      kSecAttrService: service,
                                      kSecAttrAccount: account,
                                      kSecMatchLimit: kSecMatchLimitOne,
                                      kSecReturnAttributes: true,
                                      kSecReturnData: true]

        var item: CFTypeRef?
        if SecItemCopyMatching(query as CFDictionary, &item) != errSecSuccess { return nil }
        guard let existingItem = item as? [String: Any],
              let data = existingItem[kSecAttrGeneric as String] as? Data else { return nil }
        let tokens = String(decoding: data, as: UTF8.self)
        return tokens
    }
}
