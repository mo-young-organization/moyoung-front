# 🎥 모영(주변 영화관 시간표 검색 플랫폼)

### 모여서 영화보자
프로젝트명 : 모영</br>
프로젝트 소개 : 영화 시간표를 한눈에 찾고 모여서 영화를 보기위한 플랫폼</br>
프로젝트 기간 : 2023.07.02 - 2023.11.21</br>
배포링크: [모영](http://moyoung-toy-project.s3-website.ap-northeast-2.amazonaws.com/)


</br>

## 🧑‍🤝‍🧑 Team members
| 이세영<br>(FE Leader) | 김현우<br>(FE) | 송준상<br>(BE Leader) | 최영아<br>(Design) |
|:--------:| :--------: | :--------: | :--------: |
|<img src="https://i.imgur.com/Ecsz5WA.png" alt="이세영" width="80" height="80"> | <img src="https://imgur.com/f1hUoO5.png" alt="김수현" width="80" height="80"> | <img src="https://imgur.com/Wkqbz6M.png" alt="천찬웅" width="80" height="80"> | <img src="https://imgur.com/zZFyw0D.png" alt="김윤지" width="80" height="80"> 
|[@LEE2302](https://github.com/LEE2302) | [@kimhw7](https://github.com/kimhw7) | [@DDunDDang](https://github.com/DDunDDang) | [최영아]


</br>

## 💻 Tech Stack
### 🌅 Front-end
<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black">

### 🔐 Server
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white">

</br>

## 🖥️ Demo
|회원가입&로그인|홈 화면|영화 검색 페이지|
| :---: | :---: | :---: |
|<img src="https://i.imgur.com/wH7kXVy.png" width="300px">|<img src="https://i.imgur.com/PElSvwR.png" width="300px">|<img src="https://github.com/mo-young-organization/moyoung-front/assets/104414924/1e158290-a8ca-48e0-80dd-3769b7fc11c1" width="300px"> |
|<회원가입&로그인> <br/> - OAuth 2.0을 사용하여 따로 회원가입 로그인을 <br /> 분리하지 않고 쉽게 한번에 해결하였다.| <홈 화면> <br /> - 영화관 찾기와 같이 볼 사람 찾기 두개의 버튼이 있다. <br /> - 심플한 디자인으로 홈 화면에서부터 우리 <br /> 웹사이트가 전하고자 하는 의미를 담았다.| <영화 검색 페이지> <br /> - 검색란에 현재 상영중인 영화를 검색하면 <br />주변에 상영중인 영화관 리스트가 나온다. <br /> - 영화가 헷갈릴때는 한 단어만 <br />검색해도 연관 영화가 나오게 했다. <br /> - 상영중인 영화 top10을 캐러셀로 자동슬라이<br />드 되게 만들었으며, 포스터 클릭시 해당 영화를 <br />상영중인 영화관 리스트가 뜰 수 있도록 하였다.|
|영화 리스트 페이지|영화관 리스트 페이지|게시글 리스트 페이지|
|<img src="https://i.imgur.com/8CRokwE.png" width="300px">|<img src="https://i.imgur.com/VYWUxe6.png" width="300px">|<img src="https://github.com/mo-young-organization/moyoung-front/assets/104414924/dedd0112-7f28-4eb7-a7ea-cd9fc962801f" width="300px">|
| <영화 리스트 페이지> <br /> - 검색 페이지를 통해 나온 영화들이 뜬다. <br /> - 버튼 클릭시 해당 영화관 상영중인 <br /> 영화관 리스트 페이지가 뜬다. | <영화관 리스트 페이지> <br /> - 영화 포스터와 제목, 기본 정보들이 뜬다. <br /> - 날짜와 필터가 있어서, 클릭시 해당 날짜와 <br /> 필터적용이 된다. <br /> - 현재 검색 반경과 검색 결과가 뜨며 <br /> 영화관 위치와 상영관, 시간이 뜬다.| <게시글 리스트 페이지> <br /> - 검색란을 통해 게시글을 검색할 수 있다. <br /> - 페이지 네이션을 통해 유저가 <br /> 쉽게 찾고 기억하게 했다. <br /> - 글쓰기 버튼을 통해 게시글 작성페이지로 <br /> 이동이 가능하다.(회원만 가능) <br /> - 게시글에는 호버 기능을 추가하여 마우스 호버 <br /> 시 영화 정보가 뜨며 참여하기 버튼이 뜬다.|
|게시글 작성 페이지|영화 거리 필터|게시글 필터|
|<img src="https://i.imgur.com/l6p3UtA.png" width="300px">|<img src="https://i.imgur.com/Fa1wblC.png" width="300px">|<img src="https://i.imgur.com/Nf4XLwv.png" width="300px">
|<게시글 작성 페이지> <br /> - 제목과 영화와 영화관, 모집 <br /> 정보등을 선택해야한다. <br /> - 영화를 선택하면 티켓 모양으로 바뀐다.|<영화 거리 필터> <br /> - 영화 검색시 검색 반경을 검색전에 <br /> 필터로 설정할 수 있다.| <게시글 필터> <br /> - 게시글을 정렬, 성별, 나이대, 거리별로 필터를 <br /> 적용하여 원하는 게시글을 찾을 수 있다.|
|게시글 작성 필터(리스트)| 게시글 작성 필터(상세) | 푸터 |
|<img src="https://i.imgur.com/S8XhuLY.png" width="300px"> |<img src="https://i.imgur.com/15LxnRu.png" width="300px"> | <img src="https://i.imgur.com/FDz1fol.png" width="300px" >|
|<게시글 작성 필터> <br /> - 모달을 통하여 검색한 영화 <br /> 리스트가 뜬다. <br /> - 버튼 클릭시 영화관 리스트 페이지로 이동한다. | <게시글 작성 필터> <br /> - 날짜를 클릭하면 해당 날짜에 <br /> 상영하는 시간대를 확인 할 수 있다. <br /> - 우측상단에 필터를 통하여 검색이 가능하다.| <푸터> <br /> - 프로젝트에 함께한 팀원들에 <br /> 대한 정보가 기록되어 있다. <br /> - 깃허브 모양 클릭시 해당 <br /> 팀원 깃허브로 이동한다.|


<br />

## 🔖 Project Docs

### 사용자 요구사항 정의서
<img width="900" alt="사용자 요구사항 정의서" src="">


### 화면 정의서

<img width="900" alt="화면 정의서" src="">


### User Flow

<img width="900" alt="user flow" src="">

</br>
