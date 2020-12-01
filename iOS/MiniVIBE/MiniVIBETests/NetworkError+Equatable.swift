//
//  NetworkError+Equatable.swift
//  MiniVIBETests
//
//  Created by 최동규 on 2020/12/01.
//

import Foundation
@testable import MiniVIBE

extension NetworkError: Equatable {
    public static func == (lhs: Self, rhs: Self) -> Bool {
          switch (lhs, rhs) {
          case (.nilURL, .nilURL):
            return true
          case (.httpCode, .httpCode):
            return true
          case (.unexpectedResponse, .unexpectedResponse):
            return true
          case (.networkError, .networkError):
            return true
          default: return false
          }
      }
}
