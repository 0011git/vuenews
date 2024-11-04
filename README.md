![Group 5 (1)](https://github.com/user-attachments/assets/140136ed-af67-43e7-b230-2da64d915b48)

## 📰 World News
vue.js를 이용한 모바일 전용 뉴스 사이트 World News 입니다.


## 🔗 배포 URL
<url>


## ✒ 개요
1. **주제**
    - 모바일 전용 국내 및 해외 뉴스 사이트
  
  
2. **핵심 기능**
    - 딥서치뉴스 오픈 API 활용
    - Vercel 배포  
      
3. **기간 및 인원**
    - 2024.10.25 ~ 2024.11.00(00일), 1인


## 🛠️ 기술 스택
- **프론트엔드**: Vue.js
- **상태 관리**: Vuex
- **라우팅**: Vue Router
- **배포**: Vercel
- **API**: [딥서치뉴스 오픈 API (1.0.0)](https://news.deepsearch.com/api/)


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
     ┃ ┣ 📂router
     ┃ ┃ ┗ 📜index.js
     ┃ ┣ 📂store                 /* store 폴더 */
     ┃ ┃ ┗ 📜index.js                // 전역상태관리 및 메인페이지 데이터 관리
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

## 📱 스크린샷



## 🙋 개발 상세
1. **API 호출 함수 파일 분리**
    - 유지보수 및 향후 확장성을 고려하여 별도의 파일로 분리
    - 페이지별로 구분해 현재 메인, 섹션, 검색결과 총 3개의 함수로 분리
  

2. **컴포넌트화**
    - 기본: 헤더, 푸터, 네비게이션 메뉴바, 탑버튼, 검색 인풋박스 등 기본 공통 요소들을 컴포넌트화
    - 컨텐츠별: 뉴스 컨텐츠 표기 방식에 따라 카드형, 스트랩형으로 구분해 컴포넌트화
    - 이 외 국내/해외 탭, 섹션 버튼 등 다수의 페이지에서 중복 사용하는 요소들을 컴포넌트화

      
3. **메인 페이지 전용 store 모듈화**
    - 메인 페이지 api호출 및 데이터 저장을 모듈화
    - 현재 메인은 api 호출 횟수가 총 9회이며 데이터의 갯수가 많고 향후 서비스 확장시 더 추가될 수 있음. 또한 유저가 빈번히 되돌아가는 페이지임.
      따라서 api요청을 접속시 최초 1회로 최소화하기 위해 api호출과 데이터 저장을 store에서 진행함
    - 해당 store는 전역 상태 관리보다는 데이터 저장 목적이고, 메인 페이지에서만 사용하기 때문에 모듈화함


## 💡 문제 해결 및 개선 사항




  

