
const moveEvent = {
    'eventDate': new Date(),
    'page': '/chart',
    'action': 'moveToPage',
    'eventId': 'totalRankHeaderBtn',
    'eventParams': {
        'toPage': '/chart/total'
    },
    'userId': 1,
    "userAgent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
}

const musicPlayEvent = {
  "eventDate": "2020.11.16 16:29:00",
  "page": "/track/1",
  "eventType": "CLICK",
  "eventId": "btn-play",
  "eventParams": {
    "on": true
  },
  "userId": 1,
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}

// play bar -> on/off = eventId = playbarPlayBtn
// chart - rank - thumbnail -> on/off = chartThumbnailPlayBtn

const chartPlayEvent = {
    "eventDate": new Date(),
    'page': '/chart/total',
    'action': 'playOnOff',
    "eventId": 'chartPlayClickBtn',
    "eventParams": {
        "trackId": 9821,
        "albumId": 202,
        "chartId": 'total',
        "rank": 22,
    },
    "userId": 1,
    "userAgent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
}

const searchEvent = {
  "eventDate": "2020.11.16 16:29:00",
  "page": "/magazine",
  "eventType": "KEYUP", // or "CLICK"
  "eventId": "search",
  "eventParams": {
    "toPage": "/search?keyword=아이유", 
    "keyword": "아이유" // 중복?
  },
  "userId": 1,
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
}

const trackLikeEvent = {
    "eventDate": new Date(),
    "page": '/chart/total',
    "action": 'like',
    "eventId": 'trackLikeBtn',
    "eventParams": {
        "status": true, // false
    },
    "userId": 1,
    "userAgent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
}
