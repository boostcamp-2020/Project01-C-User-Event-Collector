//
//  Repository.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/01.
//

import Combine
import Foundation

protocol WebRepository {
    var session: URLSession { get }
    var baseURL: String { get }
}
