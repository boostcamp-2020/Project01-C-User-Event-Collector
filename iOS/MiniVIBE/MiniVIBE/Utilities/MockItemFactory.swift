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
        var url: String = "https://musicmeta-phinf.pstatic.net/album/005/053/5053394.jpg?type=r480Fll&v=20201027175909"
        if idx % 4 == 0 {
            rankChange = "up"
            url = "https://musicmeta-phinf.pstatic.net/album/005/100/5100133.jpg?type=r480Fll&v=20201120161148"
        } else if idx % 4 == 1 {
            rankChange = "new"
            url = "https://musicmeta-phinf.pstatic.net/album/004/686/4686872.jpg?type=r480Fll&v=20200720175905"
        } else if idx % 4 == 2 {
            rankChange = "down"
            url = "https://musicmeta-phinf.pstatic.net/album/004/820/4820425.jpg?type=r480Fll&v=20200918130108"
        } else {
            rankChange = nil
        }
        return Song(imageURLString: url,
                    title: "Test Music\(idx)", artist: "dochoi", rankChange: rankChange)
    }
    
    static let imageURLSongs: [Song] = (0...30).map { idx -> Song in
        var rankChange: String?
        var url: String = "https://musicmeta-phinf.pstatic.net/album/005/055/5055713.jpg?type=r100Fll&v=20201029181608"
        if idx % 4 == 0 {
            rankChange = "up"
            url = "https://musicmeta-phinf.pstatic.net/album/003/072/3072061.jpg?type=r480Fll&v=20201101094531"
        } else if idx % 4 == 1 {
            rankChange = "new"
        } else if idx % 4 == 2 {
            rankChange = "down"
            url = "https://musicmeta-phinf.pstatic.net/album/005/051/5051742.jpg?type=r480Fll&v=20201023235903"
        } else {
            rankChange = nil
        }
        return Song(imageURLString: url,
                    title: "Test Music\(idx)", artist: "dochoi", rankChange: rankChange)
    }
    
    static let albums: [Album] = [
        Album(imageURLString: "newAlbum-dummy1",
              title: "ARTIST. New Bi", artist: "Anonymous Artists", songs: [], rankChange: "up"),
        Album(imageURLString: "newAlbum-dummy2", title: "Darling", artist: "양다일", songs: []),
        Album(imageURLString: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel", songs: []), Album(imageURLString: "newAlbum-dummy1",
                                                                                                                      title: "ARTIST. New Bi", artist: "Anonymous Artists", songs: [], rankChange: "up"),
        Album(imageURLString: "newAlbum-dummy2", title: "Darling", artist: "양다일", songs: []),
        Album(imageURLString: "newAlbum-dummy3", title: "A Season of Love", artist: "Idina Menzel", songs: [])]
    
    static let playlists: [Playlist]
        = [Playlist(id: 123, imageURLString: "HomePlayListSection1", title: "로맨틱 팝",
                    subtitle: "VIBE Pop", songs: []),
           Playlist(id: 124, imageURLString: "HomePlayListSection2", title: "편견을 깨는 힙합 아이돌",
                    subtitle: "VIBE 국내 힙합", songs: []),
           Playlist(id: 125, imageURLString: "HomePlayListSection3", title: "팝 트렌드",
                    subtitle: "VIBE Pop", songs: [])]
    
    static let recoPlaylists: [Playlist] = [ Playlist(id: 235, imageURLString: "vibe-dummy1",
                                                      title: "아시아 아티스트 어워즈 2020",
                                                      subtitle: "VIBE", songs: [],
                                                      description: "아시아아티스트어워즈2020을 먼저 만나는 방법!"),
                                             Playlist(id: 346, imageURLString: "vibe-dummy2",
                                                      title: "Work/Study Lo-fi",
                                                      subtitle: "VIBE",
                                                      songs: [],
                                                      description:
                                                        "집중력이 필요한 시간에 듣기 좋은 차분한 멜로디와 간질간질한 질감의 로파이 비트."),
                                             Playlist(id: 6467, imageURLString: "vibe-dummy3",
                                                      title: "꿀 떨어지는 R&B",
                                                      subtitle: "VIBE",
                                                      songs: [], description: "꿀 떨어지는 보컬과 함께하는 꿈만 같은 하루.")]
    
    static let homeSummaryItems: [SummaryItem]
        = [SummaryItem(category: "지붕뚫고 급상승 🚀",
                       image: "HomeMainSection1",
                       title: "급상승 차트 1위", description: "방탄소년단 : Life Goes On", playlist: Playlist(id: 5235, imageURLString: "DJStationDetail1", title: "급상승 차트 1위", subtitle: "방탄소년단 : Life Goes On", songs: [])),
           SummaryItem(category: "#Mood",
                          image: "DJStationDetail2",
                          title: "잠 못드는 밤에", description: "그땐 그랬을 수도 있어", playlist: Playlist(id: 52435, imageURLString: "DJStationDetail2", title: "잠 못드는 밤에", subtitle: "자꾸 내탓을 하고, 잠이 안오시나요?..", songs: [])),
           SummaryItem(category: "어느덧 크리스마스",
                          image: "DJStationDetail3",
                          title: "크리스마스 노래모음", description: "2020년 한해가 벌써 지나가네요 크리스마스 노래를 모아봤어요", playlist: Playlist(id: 52325, imageURLString: "DJStationDetail3", title: "크리스마스 노래모음", subtitle: "2020년 한해가 벌써 지나가네요", songs: []))]
    
    static let magazineItems: [Magazine] = [
        Magazine(id: 123, title: "New Release #16: 이적, 빌리 아일리시", imageURLString: "mag-dummy1"),
        Magazine(id: 124, title: "이주의 디깅 #85, aespa", imageURLString: "mag-dummy2"),
        Magazine(id: 125, title: "CHROMEO 핼러윈 파티 현장 스케치", imageURLString: "mag-dummy3")
    ]
    
    static let newsItems: [Magazine] = [
        Magazine(id: 223, title: "방탄소년단이  네번째 미니앨범을 발표합니다.",
                 imageURLString: "HomeMainSection3"),
        Magazine(id: 224, title: "방탄소년단이  네번째 미니앨범을 발표합니다. 2줄 테스트",
                 imageURLString: "mag-dummy2"),
        Magazine(id: 225, title: "CHROMEO 핼러윈 파티 현장 스케치",
                 imageURLString: "mag-dummy3")
    ]
    
    static let nowReplayItems: [NowReplayItem] = [
        NowReplayItem(albumArt: Image("now-dummy1"), description: "야간작업실"),
        NowReplayItem(albumArt: Image("now-dummy2"), description: "어벤걸스"),
        NowReplayItem(albumArt: Image("now-dummy3"), description: "6시 5분전")
    ]
    
    static let homeDJStationkItems: [DJStationItem]
        = [DJStationItem(image: "HomeDJStationSection1"),
           DJStationItem(image: "HomeDJStationSection2"),
           DJStationItem(image: "HomeDJStationSection3"),
           DJStationItem(image: "HomeDJStationSection4"),
           DJStationItem(image: "HomeDJStationSection5"),
           DJStationItem(image: "HomeDJStationSection6"),
           DJStationItem(image: "HomeDJStationSection1"),
           DJStationItem(image: "HomeDJStationSection2"),
           DJStationItem(image: "HomeDJStationSection3")]
    
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
    
    static let artists: [Artist] = []
    
    static var randomColor: UIColor {
        return UIColor(red: CGFloat(drand48()), green: CGFloat(drand48()), blue: CGFloat(drand48()), alpha: 1.0)
    }
}
