# Project01-C-User-Event-Collector

<p align="center"><img width="600" alt="logoImage" src="https://user-images.githubusercontent.com/60839959/102682895-40dbf900-4210-11eb-9cee-c6e42075a928.gif"></p>

<p align="center">
  <img src="https://img.shields.io/badge/react-17.0.1-9cf?logo=react" />
  <img src="https://img.shields.io/badge/typescript-v4.1.2-pink?logo=typescript" />
  <img src="https://img.shields.io/badge/mysql2-v2.2.5-blue?logo=mysql" />
  <img src="https://img.shields.io/badge/next.js-v10.0.3-orange?logo=next.js" />
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Swift-v5.31-red?logo=swift" />
    <img src="https://img.shields.io/badge/Xcode-v12.2-blue?logo=Xcode" />
    <img src="https://img.shields.io/badge/iOS-14.0-black?logo=apple" />  
</p>

### 👋 VIBE 사용자 이벤트 수집기 서비스 소개
네이버 음악서비스 VIBE 웹/앱을 클론한 뒤,
VIBE 서비스 사용과정에서 발생하는 이벤트를 수집하는 서비스입니다😉
   
   
### 📍 [WEB 배포 URL](http://115.85.181.152:3000)
### 📷 [프로젝트 실행 화면](https://github.com/boostcamp-2020/IssueTracker-28/wiki/%EC%8B%A4%ED%96%89-%ED%99%94%EB%A9%B4)
### 📹 [API 명세서](https://hackmd.io/NtoQmqLmTC6cv0prAzUX9g)
### ✍ [저희 팀이 더 궁금하시다면 Wiki 보러가기](https://github.com/boostcamp-2020/Project01-C-User-Event-Collector/wiki)


## 📹 Demo Video
[<img width="400" src="https://user-images.githubusercontent.com/60839959/102683358-bbf2de80-4213-11eb-87e0-c889f0afe61b.png"/>](https://youtu.be/AqSunm6fDfc)
> 클릭하시면 youtube로 이동합니다💨

## 🛠 Tech Stack
<p align="center"><img width="800" alt="기술 스택" src="https://user-images.githubusercontent.com/60839959/102683725-6966f180-4216-11eb-8bc0-77a0066d8645.png"></p>

## 📊 DB Model
<img width="800" alt="스크린샷 2020-10-27 오후 1 11 59" src="https://user-images.githubusercontent.com/60839959/102683765-ccf11f00-4216-11eb-9c1a-9787718827c2.png">



## 🗂 Directory

<details>
<summary>server</summary>
  <div markdown="1">
    
```
🗃 Project Folder  
📁backend  
(작성중)
```

  </div>
</details>

<details>
<summary>client</summary>
  <div markdown="1">
    
  ```
  📁frontend  
  ── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── ...
│   ├── library
│   │   ├── albums
│   │   │   └──...
│   │   └── tracks
│   │       └── index.tsx
│   ├── magazines.tsx
│   └── playlist.tsx
├── public
│   └── images
├── src
│   ├── components
│   │   ├── ArtistList
│   │   ├── Common         -----------------// 작은 단위의 컴포넌트가 여러 페이지에서 사용되면 여기다 만들면 될 것 같아요.
│   │   │   ├── BoxItem
│   │   │   ├── Button
│   │   │   ├── Card
│   │   │   ├── CircleImage
│   │   │   ├── Dropdown
│   │   │   └── MagTopItem
│   │   ├── Layout
│   │   │   ├── Footer
│   │   │   ├── Playbar
│   │   │   ├── Sidebar
│   │   │   └── index.tsx
│   │   ├── Template           ----------------// 특정 구역에서 공통적으로 사용되는 부분을 여기로 뺏습니다. 저는 보관함 template을 작성했습니다.
│   │   │   └── Library
│   │   ├── sample-rx.tsx
│   │   └── sample.tsx
│   ├── pages                     ----------------// 루트 하단의 pages에 import할 페이지단위의 컴포넌트를 정의하는 부분입니다.
│   │   └── Library
│   │       └── MyTrack
│   │           └── index.tsx
│   └── styles                    ----------------// (*) public 밑에 있던 style을 여기로 옮겨왔습니다. public 아닌거같아서.
│       ├── global-styles.ts
│       ├── themed-components.ts
│       ├── themes.ts
│       └── withSizes.ts
└── tsconfig.json
  ```
  
  </div>
</details>

### Web 서비스 실행순서
```
git clone https://github.com/boostcamp-2020/Project01-C-User-Event-Collector
npm i
cd backend
npm i
npm run start
cd ../frontend
npm i
npm run build
npm run start
```
 
<br>

## 🚢 Members
| 🕸 Web                                                        | 🕸 Web                                                        | 🕸 Web                                                        | 🍎 iOS                                                        | 🍎 iOS                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [![Avatar](https://avatars2.githubusercontent.com/u/48378720?s=460&v=4)J028_김도균](https://github.com/thesulks) | [![Avatar](https://avatars2.githubusercontent.com/u/41413618?s=460&u=950052ab15ba4d44ccbb311cd1f3f0a722e01605&v=4)J089_박지홍](https://github.com/hongzzi) | [![Avatar](https://avatars3.githubusercontent.com/u/60839959?s=460&u=f8790200dde7fe5e6319764188d7c31382f49fbd&v=4)J139_이상경](https://github.com/sang-gyeong) | [![Avatar](https://avatars1.githubusercontent.com/u/53948757?s=460&u=743a706b4f4f7a047e56f4f4eaec9602c1d23440&v=4)S059_최광현](https://github.com/nrurnru) | [![Avatar](https://avatars1.githubusercontent.com/u/54564170?s=460&u=f6e6840979bf6896f3831da24b21a2741d2a64c8&v=4)S060_최동규](https://github.com/ChoiDongKyu96) |
| 부캠 졸업!! 👨‍🎓  | 부캠 졸업!! 👩‍🎓|  |  |  |
<br>

<br>

## Show your support

Give a 🌟 if this project helped you
