//
//  Date+customDateFormat.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/16.
//

import Foundation

extension Date {
    func customDateFormat() -> String {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd HH:mm:ss.SSS"
        return dateFormatter.string(from: self)
    }
}
