[![worldnews_logo](https://github.com/user-attachments/assets/ed5a9c30-e8a1-494f-baa8-5c698e7ed1e7)](https://worldnews-one.vercel.app/)

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white) ![Vuex](https://img.shields.io/badge/Vuex-4FC08D?style=flat-square&logo=Vuex&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white)

## 📰 개요
vue.js를 이용한 모바일 전용 뉴스 사이트 **World News** 입니다.

![worldnews_thumbnail](https://github.com/user-attachments/assets/570d3301-e75a-4770-999f-6551cb8af6a4)


## 🔗 배포 URL
<!--url-->
<https://worldnews-one.vercel.app/>


## 📑 요약
### 1. 주제
- 국내 및 해외 뉴스 모바일 사이트

### 2. 목표
- 실시간 뉴스 정보 제공

### 3. 핵심 기능
- 딥서치 뉴스 API로 뉴스 컨텐츠 제공

### 4. 주요 기술 스택
- Vue.js, Express, Vercel

### 5. 기간 및 인원
- 2024.10.25 ~ 2024.11.22(약 17일), 1인



## 💡 주요 작업
### 1. 딥서치 뉴스 API 사용
- [딥서치 뉴스 API(1.0.0)](https://news.deepsearch.com/api/) 로 컨텐츠를 제공

### 2. Express API 서버 구축
- 데이터 요청을 위해 Express를 이용해 API 서버 구축

### 3. Vercel 배포
- 변동 사항이 실시간으로 반영되도록 자동화된 배포 환경을 구축



## 💼 폴더 구조
    📦news
     ┣ 📂node_modules
     ┣ 📂public
     ┃ ┣ 📜favicon.ico
     ┃ ┗ 📜index.html
     ┣ 📂src
     ┃ ┣ 📂api                     /* api 폴더 */
     ┃ ┃ ┗ 📜apifunc.js                // api함수 별도 분리
     ┃ ┣ 📂assets                  /* assets 폴더 : 아이콘, 이미지 저장 */
     ┃ ┣ 📂components              /* components 폴더 */
     ┃ ┃ ┣ 📜CardNews.vue              // 카드형 뉴스 
     ┃ ┃ ┣ 📜FooterComponent.vue       // 푸터
     ┃ ┃ ┣ 📜HeaderComponent.vue       // 헤더
     ┃ ┃ ┣ 📜LocalGlobalTab.vue        // 국내/해외 탭
     ┃ ┃ ┣ 📜NavMenu.vue               // 네비게이션 메뉴
     ┃ ┃ ┣ 📜SearchBar.vue             // 검색 인풋박스
     ┃ ┃ ┣ 📜SearchBox.vue             // 검색 모달창
     ┃ ┃ ┣ 📜SectionBtns.vue           // 섹션별(정치, 경제, ...) 버튼
     ┃ ┃ ┣ 📜StrapNews.vue             // 스트랩형 뉴스
     ┃ ┃ ┗ 📜TopBtn.vue                // 탑버튼
     ┃ ┣ 📂mixins               /* mixins 폴더: 공용 함수 저장*/
     ┃ ┃ ┗ 📜goToDetail.js          // 디테일 페이지로 이동
     ┃ ┣ 📂router
     ┃ ┃ ┗ 📜index.js
     ┃ ┣ 📂store                 /* store 폴더 */
     ┃ ┃ ┗ 📜index.js                // 전역 상태 관리 및 데이터 관리
     ┃ ┣ 📂views                 /* views 폴더 */
     ┃ ┃ ┣ 📜DetailView.vue          // 뉴스 상세 페이지
     ┃ ┃ ┣ 📜HomeView.vue            // 메인 페이지
     ┃ ┃ ┣ 📜SearchView.vue          // 검색 결과 페이지
     ┃ ┃ ┗ 📜SectionView.vue         // 섹션별(정치, 경제, ...) 페이지
     ┃ ┣ 📜App.vue
     ┃ ┗ 📜main.js
     ┣ 📜.gitignore
     ┣ 📜babel.config.js
     ┣ 📜jsconfig.json
     ┣ 📜package-lock.json
     ┣ 📜package.json
     ┣ 📜README.md
     ┗ 📜vue.config.js



## 🛠️ 개발 환경  
| 기술              | 기술명            | Badge                                                           |
|:-----------------:|:-----------------:|:-------------------------------------------------------------:|
| **프레임워크**    | Vue.js            | ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white) |
| **상태 관리**     | Vuex              | ![Vuex](https://img.shields.io/badge/Vuex-4FC08D?style=flat-square&logo=Vuex&logoColor=white) |
| **서버**          | Express           | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) |
| **스타일링**      | SASS              | ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white) |
| **API 테스트**    | Postman           | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) |
| **HTTP 요청**     | Axios             | ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) |
| **버전 관리**     | GitHub            | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white) |
| **배포**          | Vercel            | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) |



## 🙋 개발 상세
### 1. API 엔드포인트를 고려한 사이트 구조 설계
- 탑다운 방식으로 설계
- 리소스 경로에서 필수 선행하는 국내/해외 경로를 최상위에 배치
    - 국내(...deepsearch.com/v1/**articles**)와 해외(.../v1/**global-articles**) 선택을 최상위 배치하여 API URL구조와 일치시킴
- 이후 선택 사항인 섹션 배치
    - 정치(.../v1/articles/**politics**), 경제(.../v1/articles/**economy**) 등 8개의 섹션은 국내/해외 선택 이후에 고를 수 있도록 함

- 그 외 쿼리는 큰 영향력이 없어 구조 설계시 제외

<!-- <details>
  <summary>$\bf{{\color{#00B106}데이터\ 구조}}$</summary> -->
  
![image](https://github.com/user-attachments/assets/c042591a-69af-4da1-b734-5454d4d732f2)
<!-- </details>   -->


### 2. API 함수 분리
- 유지보수 및 향후 확장성을 고려하여 별도의 폴더 및 파일 ```apifunc.js``` 생성
- 페이지별로 메인, 섹션, 검색 총 3개의 함수로 분리
```
    ...
     ┣ 📂src
     ┃ ┣ 📂api                     
     ┃ ┃ ┗ 📜apifunc.js
     ...
```


### 3. 컴포넌트화
- **기본**: 헤더, 푸터, 네비게이션 메뉴바, 탑버튼, 검색 인풋박스 등 기본 공통 요소들을 컴포넌트화
- **컨텐츠별**: 뉴스 컨텐츠 표기 방식에 따라 카드형, 스트랩형으로 구분해 컴포넌트화
- 이 외 국내/해외 탭, 섹션 버튼 등 다수의 페이지에서 중복 사용하는 요소들을 컴포넌트화

![components_worldnews](https://github.com/user-attachments/assets/80b25593-05be-4f92-835d-0eeb2e5fc91a)


### 4. API 요청    
#### (1) 메인 페이지
- 메인 컨텐츠 관련 api를 한번에 일괄 요청하려 했으나, 딥서치뉴스는 무료 플랜에 월 300회 횟수 제한이 있어 처음의 계획을 변경
- 최초 화면을 만들기 위한 최소한의 api요청을 넣기로 결정. 오늘의 뉴스와 정치 섹션 2회만 요청하고, 유저가 다른 버튼을 클릭해 데이터가 필요해진 시점에 api를 요청
- 최초 접속시 1회로 제한하기 위해 스토어에 데이터를 저장하려 했으나, 실시간으로 뉴스 DB가 업데이트 되는 관계로 정보를 저장하지 않는 방향으로 변경

#### (2) 디테일 페이지
- api 요청 필요 없음

#### (3) 검색 페이지
- 키워드 쿼리를 추가해 요청
- 반복적 요청을 피하기 위해 Store에 데이터를 저장


### 5. Store 모듈화
#### (1) 검색 페이지
- 검색 시 "검색결과 페이지 → 디테일 페이지 → 뒤로 가기 → 검색결과 페이지" 의 반복적 페이지 이동을 가정

  **⇒** 뒤로 가기를 통해 검색결과 페이지로 재이동 시 매번 동일한 api호출이 발생하는 것을 방지하기 위해 데이터를 store에 저장

  **⇒** **검색어 변경 시 기존 데이터를 삭제**하도록 함


### 6. Express 서버 구축
- API 요청을 위해 Express로 ```news.js```서버 구축 
- 클라이언트에서 서버 호출 시 [ 국내/해외, 페이지, 섹션, 검색키워드, ... ] 필수 정보를 쿼리로 넘김
- 서버에서 실제 API URL을 설정
- '오늘의 뉴스' 등 컨텐츠마다 변경되는 날짜 계산(오늘, 30일전)은 서버에서 진행함


### 7. 디테일 페이지는 URL에 데이터를 저장
- useSearchParams() 사용: 클릭한 컨텐츠의 데이터(1개의 오브젝트)를 params로 전달, 디테일 페이지에서 이를 받아 랜더링


   
## 💥 트러블 슈팅
### 1. API 요청 횟수 제한으로 인한 이슈
- 무료 횟수가 월 300회로 다소 적은 편이라 초기 개발 시 한도를 초과함
  **⇒ 해결 방법**: 새로 계정을 생성하고, 개발 단계에서는 Postman으로 데이터 값을 받은 후 직접 저장해 사용하고 테스트 단계부터 실제 서버 요청

### 2. 


## 📚 참고 URL
- 화면 설계 : [World News Figma](https://www.figma.com/design/iMrfAOhg4C0U5H0iam23Uz/vue_news?node-id=0-1&node-type=canvas&t=ldGMdWvw6MOwIAg5-0)


## 📱 스크린샷
![worldnews_sub](https://github.com/user-attachments/assets/c51aec3a-28af-4336-8b9f-4ff3ff43b102)


