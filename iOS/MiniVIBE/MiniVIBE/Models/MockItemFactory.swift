//
//  MockItemFactory.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/12/06.
//

import SwiftUI
import UIKit

final class MockItemFactory {

    static let rankSongs: [Song] = (0...30).map { idx -> Song in
        var rankChange: String?
        if idx % 4 == 0 {
            rankChange = "up"
        } else if idx % 4 == 1 {
            rankChange = "new"
        } else if idx % 4 == 2 {
            rankChange = "down"
        } else {
            rankChange = nil
        }
        return Song(imageURLString: "HomeDJStationSection1",
                    title: "Test Music\(idx)", artist: "dochoi", rankChange: rankChange)
    }
    
    static let albums: [Album] = [
    Album(imageURLString: "newAlbum-dummy1",
          title: "ARTIST. New Bi", artist: "Anonymous Artists", songs: [], rankChange: "up"),
    Album(imageURLString: "newAlbum-dummy2", title: "Darling", artist: "양다일", songs: []),
    Album(imageURLString: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel", songs: [])]
    
    static let playlists: [Playlist]
        = [Playlist(imageURLString: "HomePlayListSection1", title: "로맨틱 팝",
                    subtitle: "VIBE Pop", songs: []),
           Playlist(imageURLString: "HomePlayListSection2", title: "편견을 깨는 힙합 아이돌",
                    subtitle: "VIBE 국내 힙합", songs: []),
           Playlist(imageURLString: "HomePlayListSection3", title: "팝 트렌드",
                    subtitle: "VIBE Pop", songs: [])]
    
    static let recoPlaylists: [Playlist] = [ Playlist(imageURLString: "vibe-dummy1",
                                                 title: "아시아 아티스트 어워즈 2020",
                                                 subtitle: "VIBE", songs: [],
                                                 description: "아시아아티스트어워즈2020을 먼저 만나는 방법!"),
                                        Playlist(imageURLString: "vibe-dummy2",
                                                              title: "Work/Study Lo-fi",
                                                              subtitle: "VIBE",
                                                              songs: [],
                                                              description:
                                                                "집중력이 필요한 시간에 듣기 좋은 차분한 멜로디와 간질간질한 질감의 로파이 비트."),
                                        Playlist(imageURLString: "vibe-dummy3",
                                                              title: "꿀 떨어지는 R&B",
                                                              subtitle: "VIBE",
                                                              songs: [], description: "꿀 떨어지는 보컬과 함께하는 꿈만 같은 하루.")]
    
    static let homeSummaryItems: [HomeSummaryItem]
        = [HomeSummaryItem(category: "지붕뚫고 급상승 🚀",
                           image: "HomeMainSection1",
                           title: "급상승 차트 1위", description: "방탄소년단 : Life Goes On"),
           HomeSummaryItem(category: "스테이션", image: "HomeMainSection2",
                           title: "여유를 즐겨요", description: "장르별 스테이션 : 잔잔한 클래식"),
           HomeSummaryItem(category: "새 앨범", image: "HomeMainSection3",
                           title: "방탄소년단", description: nil)]
    
    static let magazineItems: [Magazine] = [
        Magazine(image: "mag-dummy1", description: "New Release #16: 이적, 빌리 아일리시"),
        Magazine(image: "mag-dummy2", description: "이주의 디깅 #85, aespa"),
        Magazine(image: "mag-dummy3", description: "CHROMEO 핼러윈 파티 현장 스케치")
    ]
    
    static let newsItems: [Magazine] = [
        Magazine(image: "HomeMainSection3", description: "방탄소년단이  네번째 미니앨범을 발표합니다."),
        Magazine(image: "mag-dummy2", description: "방탄소년단이  네번째 미니앨범을 발표합니다. 2줄 테스트"),
        Magazine(image: "mag-dummy3", description: "CHROMEO 핼러윈 파티 현장 스케치")
    ]
    
    static let nowReplayItems: [HomeNowReplayItem] = [
        HomeNowReplayItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
        HomeNowReplayItem(albumArt: Image("now-dummy2"), description: "어벤걸스"),
        HomeNowReplayItem(albumArt: Image("now-dummy3"), description: "6시 5분전")
    ]
    
    static let homeDJStationkItems: [HomeDJStationItem]
        = [HomeDJStationItem(image: "HomeDJStationSection1"),
           HomeDJStationItem(image: "HomeDJStationSection2"),
           HomeDJStationItem(image: "HomeDJStationSection3")]
    
    static let videoItems: [Video] = [Video(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단"),
                                         Video(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단"),
                                         Video(imageURLString: "HomeMainSection3",
                                               title: "Life Goes On : Like an arrow", artist: "방탄소년단")]
    
    static let songItems: [Song] = [Song(imageURLString: "newAlbum-dummy1", title: "노래1", artist: "아이유"),
                                    Song(imageURLString: "newAlbum-dummy2", title: "노래2", artist: "태연"),
                                    Song(imageURLString: "newAlbum-dummy3", title: "노래3", artist: "Imagine Dragons"),
                                    Song(imageURLString: "newAlbum-dummy2", title: "노래4", artist: "Maroon 5"),
                                    Song(imageURLString: "newAlbum-dummy1", title: "노래5", artist: "Artist")]
    
    static let artists: [Artist] = [Artist(imageURLString: "newAlbum-dummy1", name: "maroon 1"),
                                    Artist(imageURLString: "newAlbum-dummy2", name: "maroon 2"),
                                    Artist(imageURLString: "newAlbum-dummy3", name: "maroon 3"),
                                    Artist(imageURLString: "newAlbum-dummy1", name: "maroon 4"),
                                    Artist(imageURLString: "newAlbum-dummy2", name: "maroon 5"),]
    
    static var randomColor: UIColor {
        return UIColor(red: CGFloat(drand48()), green: CGFloat(drand48()), blue: CGFloat(drand48()), alpha: 1.0)
    }
}
