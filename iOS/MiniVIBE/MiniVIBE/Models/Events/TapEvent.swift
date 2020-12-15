//
//  MoveEvent.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/15.
//

import BCEventEmitter

class TapEvent: Event {
    enum Target: CustomStringConvertible {
        case login
        case song
        case playlist
        case album
        case more
        case like
        case playPause(state: String)
        case next
        case share
        case `repeat`
        case shuffle
        case custom(String)
        
        var description: String {
            switch self {
            case .login:
                return "login"
            case .song:
                return "song"
            case .playlist:
                return "playlist"
            case .album:
                return "album"
            case .more:
                return "more"
            case .like:
                return "like"
            case let .playPause(state):
                return state
            case .next:
                return  "next"
            case .repeat:
                return "repeat"
            case .share:
                return "share"
            case .shuffle:
                return "shuffle"
            case let .custom(reason):
                return reason
            }
        }
    }
    
    init(component: String, target: TapEvent.Target) {
        super.init(name: EventName.tabButton.description, parameters: [.component: component, .target: target.description])
    }
    
    required init(from decoder: Decoder) throws {
        emitEvent(event: ErrorEvent(from: "TapEvent required init", reason: "init(from:) has not been implemented"))
        fatalError("init(from:) has not been implemented")

    }
}
