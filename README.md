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

<br>

### 👋 VIBE 사용자 이벤트 수집기 서비스 소개
네이버 음악서비스 VIBE 웹/앱을 클론하고  
VIBE 서비스 사용과정에서 발생하는 이벤트를 수집하는 서비스입니다😉
<p align="center"><img width="550" alt="event" src="https://user-images.githubusercontent.com/60839959/102684475-46d7d700-421c-11eb-8e5d-a50837d36f17.gif"></p>

## 어떤 이벤트를 수집하나요?
> 유의미한 이벤트가 어떤 것일지, 이벤트 로그는 어떤 목적으로 수집되는지에 대해 고민하여 이벤트 로그를 정의했습니다.

<p align="center"><img width="454" alt="event" src="https://user-images.githubusercontent.com/60839959/102684472-44757d00-421c-11eb-9761-8953142ad320.png"></p>
<p align="center">
<img width="360" alt="event" src="https://user-images.githubusercontent.com/60839959/102684638-c74b0780-421d-11eb-84fc-8f4f625a66e6.png">
<img width="570" alt="스크린샷 2020-12-19 오후 5 27 57" src="https://user-images.githubusercontent.com/60839959/102684875-910e8780-421f-11eb-8b64-16f53d06c200.png">
</p>

<br>
<br>
 
## 🛠 Tech Stack
<p align="center"><img width="700" alt="기술 스택" src="https://user-images.githubusercontent.com/60839959/102683725-6966f180-4216-11eb-8bc0-77a0066d8645.png"></p>

<br>

## 📹 Demo Video
#### Web🕸
  
[<img width="500" src="https://user-images.githubusercontent.com/60839959/102683358-bbf2de80-4213-11eb-87e0-c889f0afe61b.png"/>](https://youtu.be/AqSunm6fDfc)
> 클릭하시면 youtube로 이동합니다💨

### 📹 [API 명세서](https://hackmd.io/NtoQmqLmTC6cv0prAzUX9g)
### ✍ [저희 팀이 더 궁금하시다면 Wiki 보러가기](https://github.com/boostcamp-2020/Project01-C-User-Event-Collector/wiki)



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
│   │   ├── Common         -----------------// 여러 페이지에서 반복적으로 사용되는 컴포넌트 
│   │   │   ├── BoxItem
│   │   │   ├── Button
│   │   │   ├── Card
│   │   │   ├── CircleImage
│   │   │   ├── Dropdown
│   │   │   └── MagTopItem
│   │   ├── Layout            -----------------// 모든페이지에서 공통적으로 사용되는 레이아웃 컴포넌트
│   │   │   ├── Footer
│   │   │   ├── Playbar
│   │   │   ├── Sidebar
│   │   │   └── index.tsx
│   │   ├── Template           ----------------// 특정 구역에서 공통적으로 사용되는 컴포넌트들을 모아 템플릿으로 관리 (보관함, 디테일 페이지 등)
│   │   │   └── Library
│   │   ├── sample-rx.tsx
│   │   └── sample.tsx
│   ├── pages                     ----------------// 루트 하단의 pages에 import할 페이지단위의 컴포넌트를 정의하는 부분입니다.
│   │   └── Library
│   │       └── MyTrack
│   │           └── index.tsx
│   └── styles                    ----------------// theme, 
│       ├── global-styles.ts
│       ├── themed-components.ts
│       └── themes.ts
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
| 부캠 졸업!! 👨‍🎓  | 부캠 졸업!! 👩‍🎓| 조금씩 꾸준히🏃‍♀️ |  |  |
<br>

<br>

## Show your support

Give a 🌟 if this project helped you
