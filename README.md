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
|회원가입&로그인|홈 화면|영화관 검색 페이지|
| :---: | :---: | :---: |
|<img src="https://imgur.com/uerglF1.png" width="400px">|<img src="https://imgur.com/Wg4kveH.png" width="400px">|<img src="https://imgur.com/rpiZKpW.png" width="400px">|
|<회원가입 페이지> <br /> - 여러 정보들을 입력하고 회원가입 할 수 있다. <br /> - 이미 가입되어 있는 이메일과 닉네임은 회원 가입이 불가능하다. <br />- 각 입력창마다 유효성 검사가 존재한다. <br />-가입 성공 시 로그인 화면으로 이동한다. <br />|<로그인 페이지><br />-이메일 주소, 비밀번호를 입력하여 로그인 할 수 있다. <br />-Google Oauth 로그인 가능하다.<br />-로그인 성공 시 홈 화면으로 이동한다. <br /> |<아이디/비밀번호 찾기> <br /> - 회원가입할 때 입력한 주민등록번호로 자신의 아이디를 찾을 수 있다. <br /> - 아이디와 회원가입할 때 입력한 비밀번호 찾기 질문/답변을 입력하면 임시비밀번호를 발급받을 수 있다.
|영화관 리스트 페이지|영화관 상세 페이지|게시글 리스트 페이지|
|<img src="https://imgur.com/U2pj9xT.png" width="400px">|<img src="https://imgur.com/vHdALZf.png" width="400px">|<img src="https://imgur.com/nkM74pc.png" width="400px">|
|<홈><br /> - 관리자 채택글을 캐러셀 형태로 볼 수 있다. 캐러셀은 화살표 버튼으로 이동가능하다. <br /> 관리자 채택글에서는 게시글을 작성할 때 입력한 주소가 카카오맵으로 표시된다.<br />  <나비게이션바> <br /> - 비로그인 시 로그인 버튼이 보이며 클릭 시 로그인 화면으로 이동한다. <br /> - 로그인 시 로그인 버튼이 프로필로 변경되며 클릭 시 마이페이지로 이동한다. <br /> - 서울의 미세먼지 상황을 알려주며, 좋음, 보통, 나쁨으로 나눠 이모티콘과 색상이 변경된다. <br /> - 카테고리 클릭 시 해당 카테고리 게시글 목록 페이지로 이동한다. <br /> - 현재 어떤 카테고리가 클릭되었는지 표시된다.|게시글 목록 <br /> - 카테고리별 게시글 목록을 나열한다. <br /> - 게시글 클릭시 상세페이지로 이동한다. <br /> - 게시글 좋아요와 북마크를 클릭시 색상이 변한다. <br /> - 페이지네이션으로 페이지 이동이 가능하다. <br /> - 검색을 제목,내용,태그로 검색이 가능하다. <br /> - 글쓰기 클릭시 글쓰기 생성페이지로 이동한다.|<게시글 내용> <br /> - 게시글 제목, 작성자 프로필 사진 및 닉네임, 작성 날짜, 총 좋아요 개수와 댓글 개수, 주소, 내용, 사진, 태그, 댓글 대댓글을 보여준다. <br />  - 일반 유저의 경우 좋아요와 북마크 버튼, 관리자의 경우 채택과 고정 버튼이 보인다. <br /> - 작성자의 경우 수정 및 삭제 버튼이 보인다. <br />  <댓글 및 대댓글> <br /> - 입력창에는 300자 초과 시 더이상 입력되지 않으며 등록 버튼을 누르면 댓글이 생성된다. <br /> - 댓글에는 댓글 추가 버튼이 있으며, 클릭 시 해당 댓글 아래로 대댓글 입력창이 뜬다. <br />  - 작성자의 경우 댓글 수정 및 삭제 버튼이 보인다. <br /> |
|게시글 작성 페이지|영화관 거리 필터|게시글 필터|
|<img src="https://imgur.com/j3wBHag.png" width="400px">|<img src="https://imgur.com/899XAWu.png" width="400px">|<img src="https://imgur.com/oXE2Icr.png" width="400px">
|게시글 작성 <br /> - 커뮤니티, 제목, 주소, 태그, 본문을 작성할 수 있다. <br /> - text에디터를 사용하여 글 스타일과 이미지를 첨부할 수 있다. <br /> - 등록 클릭시 유효성 검사를 하여 통과하면 글 작성이 완료된다.| - 기존 작성된 카테고리, 게시글 제목, 주소, 태그, 내용, 사진 정보가 넘어온다. <br /> - 수정 버튼 클릭 시 수정된 게시글 페이지로 이동한다. <br /> | - 기존 작성된 카테고리, 게시글 제목, 주소, 태그, 내용, 사진 정보가 넘어온다. <br /> - 채택 버튼 클릭 시 홈으로 이동되며 해당 게시글에는 채택 마크가 붙는다. <br /> |
|게시글 작성 필터|
|<img src="https://imgur.com/Zk7l6sb.png" width="400px"> |
|내가 쓴 글 <br /> - 내가 쓴 글과 내가 쓴 댓글 목록이 나열된다. <br /> - 제목과 댓글을 클릭시 본인이 작성한 상세페이지로 이동한다.|


<br />

## 🔖 Project Docs

### 사용자 요구사항 정의서
<img width="900" alt="사용자 요구사항 정의서" src="">


### 화면 정의서

<img width="900" alt="화면 정의서" src="">


### User Flow

<img width="900" alt="user flow" src="">

</br>
