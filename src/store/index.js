// import { mainApi } from '@/api/apifunc';
import { createStore } from 'vuex'


// 국내local/해외global 전역 상태 관리
const localOrGlobalModule = {
  namespaced: true,
  state: {
    world: 'local'
  },
  mutations: {
    setWorld(state, world) {
        state.world = world;
    }
  },
  actions: {
    chooseWorld({ commit }, world) {
      commit('setWorld', world);
    }
  }
}

//메인 모듈
// const mainDataModule = {
//   namespaced: true,
//   state: {  //공통으로 사용할 변수 정의, 프로젝트 내의 모든 곳에서 사용 가능
//     mainItems:{}
//   },
//   getters: {  //여러 개의 컴포넌트에서 동일한 computed를 사용할 경우 이곳에 정의해 공통으로 사용 가능.
//     getMainItems(state){
//       return state.mainItems
//     }
//   },
//   mutations: {  //state변경시키기, 동기처리, commit('함수명','전달인자')로 실행
//    setMainItems(state, mainData){
//     state.mainItems = mainData;
//     console.log(state.mainItems);
//    }
//   },
//   actions: {  //mutation실행시키기, 비동기처리가 필요한 로직 수행, dispatch('함수명', '전달인자', {root:true})로 실행, 함수형태로 작성??
//     async fetchMainData({commit}){
//       // const mainData = await mainApi(this.world);
//       const mainData = {
//         'today': [{
//           "data": [
//             {
//                 "id": "1506381433269260558",
//                 "sections": [
//                     "tech"
//                 ],
//                 "title": "경동나비엔, 365일 상담가능한 AI 챗봇 '가이드 에벗' 공개",
//                 "publisher": "전자신문",
//                 "author": "",
//                 "summary": "경동나비엔이 365일 상담 가능한 생성형 인공지능(AI) 기반 채팅 상담 고객 센터 'AI 가이드 에벗'을 공개한다.\n\n나비엔 하우스에 접속해 'AI 가이드 에벗'을 찾아 채팅창에 문의사항을 입력하는 방식이다.\n\n전양균 경동나비엔 CCM본부장은 “AI 가이드 에벗을 시작으로 고객과의 접점을 강화하며 쾌적한 생활환경을 위한 최고의 서비스를 지속 제공할 것”이라 말했다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/tech/2024/11/08/1506381433269260558/000-addd51b59a5f08dce5785cf65f241625f449ff61.png",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/tech/2024/11/08/1506381433269260558/000-addd51b59a5f08dce5785cf65f241625f449ff61.png",
//                 "content_url": "https://www.etnews.com/20241108000203",
//                 "esg": null,
//                 "companies": [
//                     {
//                         "name": "경동나비엔",
//                         "symbol": "009450",
//                         "exchange": "KRX",
//                         "sentiment": null
//                     }
//                 ],
//                 "entities": [
//                     {
//                         "type": "company",
//                         "name": "경동나비엔"
//                     }
//                 ],
//                 "published_at": "2024-11-08T14:25:00"
//             },
//             {
//                 "id": "1506381512721961251",
//                 "sections": [
//                     "world"
//                 ],
//                 "title": "Japan Nuclear Fukushima",
//                 "publisher": "AP연합뉴스",
//                 "author": "",
//                 "summary": "This photo released by Tokyo Electric Power Company Holdings, shows a piece of melted fuel debris collected by a remote-controlled robot from inside of No.\n\n2 reactor is being placed inside of a canister before it was closed and taken out of an enclosed compartment for further analysis, at the Fukushima Daiichi nuclear power plant in Okuma, Fukushima, northern Japan Wednesday, Nov.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/world/2024/11/08/1506381512721961251/000-35f1cae0feb3ceeb074fda11ff2590b326d08796.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/world/2024/11/08/1506381512721961251/000-35f1cae0feb3ceeb074fda11ff2590b326d08796.jpg",
//                 "content_url": "https://n.news.naver.com/mnews/article/077/0006427701?rc=N&ntype=RANKING&sid=104",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:24:00"
//             },
//             {
//                 "id": "1506381000513556770",
//                 "sections": [
//                     "sports"
//                 ],
//                 "title": "[BK 프리뷰] 상위권 지키려는 현대모비스와 6연패 탈출 시급한 DB, 울산에서 1R 맞대결",
//                 "publisher": "바스켓코리아",
//                 "author": "",
//                 "summary": "# 시즌 기록 및 최근 두 경기 성적 현대모비스는 평균 득점(82.4점)에서 대구 한국가스공사에 이어 리그 2위를 달리고 있다.\n\n리바운드도 경기당 39.7개(리그 3위)로 안정적인 가운데, 페인트 존에서만 평균 22.3개를 넣고 있다.\n\n스틸은 평균 5.0개로 리그 최하위를 기록 중이고, 턴오버는 경기당 13.4개로 DB와 서울 삼성에 이어 세 번째로 많이 저지르고 있다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/sports/2024/11/08/1506381000513556770/000-eb4f8d0a8e009d894cec847c93e879cc38e9d1c8.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/sports/2024/11/08/1506381000513556770/000-eb4f8d0a8e009d894cec847c93e879cc38e9d1c8.jpg",
//                 "content_url": "https://basketkorea.com/news/newsview.php?ncode=1065590452920077",
//                 "esg": null,
//                 "companies": [
//                     {
//                         "name": "DB",
//                         "symbol": "012030",
//                         "exchange": "KRX",
//                         "sentiment": null
//                     },
//                     {
//                         "name": "현대모비스",
//                         "symbol": "012330",
//                         "exchange": "KRX",
//                         "sentiment": null
//                     }
//                 ],
//                 "entities": [
//                     {
//                         "type": "company",
//                         "name": "DB"
//                     },
//                     {
//                         "type": "company",
//                         "name": "KCC"
//                     },
//                     {
//                         "type": "company",
//                         "name": "SK"
//                     },
//                     {
//                         "type": "company",
//                         "name": "한국가스공사"
//                     },
//                     {
//                         "type": "company",
//                         "name": "현대모비스"
//                     }
//                 ],
//                 "published_at": "2024-11-08T14:23:10"
//             },
//             {
//                 "id": "1506381512721961248",
//                 "sections": [
//                     "world"
//                 ],
//                 "title": "美 금리 인하, 中 부양책 기대에…신흥국 지수 상승세",
//                 "publisher": "한국경제",
//                 "author": "",
//                 "summary": "Fed 기준금리 0.25%포인트 인하에 신흥국 MSCI 통화·증시 지수 상승세 중국, 대규모 재정 부양책 발표 임박 CSI300지수 한주 동안 6.9% 올라이 기사는 국내 최대 해외 투자정보 플랫폼 한경 글로벌마켓에 게재된 기사입니다.\n\n미국 중앙은행(Fed)이 예상대로 기준금리를 0.25%포인트 인하한 후 신흥국 통화와 증시가 강세를 보였다.\n\n개발도상국 증시를 추적하는 MSCI 지수도 이날 금리 결정 이후 0.8% 상승 마감했다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/world/2024/11/08/1506381512721961248/000-795355f859353e75a80f027b3f5f55a00a505991.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/world/2024/11/08/1506381512721961248/000-795355f859353e75a80f027b3f5f55a00a505991.jpg",
//                 "content_url": "https://www.hankyung.com/article/202411089108i",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:23:00"
//             },
//             {
//                 "id": "1506381450524627063",
//                 "sections": [
//                     "culture"
//                 ],
//                 "title": " \"연기로 여는 인생\" 2막 행복연극교실 4기 발표회 14~15일",
//                 "publisher": "매일신문",
//                 "author": "",
//                 "summary": "세대·입장별 갈등 다룬 연극 '대화가 필요해'…13명 단원 주2회 연습 내년 2월, 연극교실 5기 단원 모집 예정 행복북구문화재단의 '행복연극교실 4기' 연극 발표회 '대화가 필요해'가 14일(목)~15일(금) 오후 7시 30분 어울아트센터 오봉홀에서 개최된다.\n\n이들은 올해 2월부터 매주 2회씩 연습하며 이번 공연을 준비했다.\n\n박정숙 행복북구문화재단 대표이사는 \"13명의 아마추어 배우들이 인생 제2막의 꿈을 펼칠 이번 공연에 지역민들의 많은 관심과 응원 부탁드린다\"라며 \"내년 2월에 예정된 5기 연극교실 단원 모집에도 많은 신청 바란다\"고 했다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/culture/2024/11/08/1506381450524627063/000-e9bc957165f691a190fa32e180e4a7a1d14ce2c0.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/culture/2024/11/08/1506381450524627063/000-e9bc957165f691a190fa32e180e4a7a1d14ce2c0.jpg",
//                 "content_url": "https://www.imaeil.com/page/view/2024110814213745565",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:23:00"
//             },
//             {
//                 "id": "1506381292437115507",
//                 "sections": [
//                     "society"
//                 ],
//                 "title": "성동구, 건강 걷기 챌린지 운영…가을 명소 즐기며 건강도 챙겨요!",
//                 "publisher": "한겨레",
//                 "author": "",
//                 "summary": "서울 성동구(구청장 정원오)가 11월 11일 ‘보행자의 날’을 기념해 2주간 온라인 걷기 챌린지 ‘건강 걷기 캠페인’을 운영한다고 밝혔다.\n\n이번 캠페인은 주민들이 일상 속 걷기를 통해 건강을 증진하도록 돕기 위해 마련됐다.\n\n이번 건강 걷기 캠페인은 11일부터 25일까지 진행되며 성동구민 또는 성동구에서 활동하는 누구나 모바일 걷기앱 ‘워크온’을 통해 참여할 수 있다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/society/2024/11/08/1506381292437115507/000-16bc6f8dd3b5a060bbe55635ff82e2a6e691bfe8.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/society/2024/11/08/1506381292437115507/000-16bc6f8dd3b5a060bbe55635ff82e2a6e691bfe8.jpg",
//                 "content_url": "http://www.seouland.com/arti/society/society_general/19150.html",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:23:00"
//             },
//             {
//                 "id": "1506381292437115503",
//                 "sections": [
//                     "society"
//                 ],
//                 "title": "김보라 안성시장, 시책추진비 2700만원 자진 반납...\"어려움 함께 하겠다\"",
//                 "publisher": "파이낸셜뉴스",
//                 "author": "장충식",
//                 "summary": "내년 시책추진비 2700만원 감액, 2년 연속 자진 반납 \"경제상황이 좋지 않은데, 불필요한 낭비를 줄이고, 오직 시민만을 생각하겠다\" 김보라 경기 안성시장이 지속되는 경기침체와 정부의 지방교부세 감액 영향을 최소화 하기 위해 지자체장에게 배분된 시책추진업무추진비의 32%를 반납한다.\n\n안성시 관계자는 \"지자체장이 2년 연속으로 업무추진비를 자진 반납하는 일은 역대 안성시에 있어 보기 드문 사례\"라며 \"반납된 예산은 지방교부세 감액 등 세입 부족분 확충과 시민들을 위한 사업에 쓰일 계획\"이라고 밝혔다.\n\n김보라 시장은 \"올해는 물론, 내년에도 국내외 경제 상황이 어려울 것으로 예측되는 만큼, 조금이나마 힘을 보태고자 업무추진비 반납을 결정하게됐다\"며 \"민선 8기 안성시는 '시민중심·시민이익'의 비전을 실천하 ...",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/society/2024/11/08/1506381292437115503/000-dedf1e9480b3355845d0a3add71ff85acab1438a.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/society/2024/11/08/1506381292437115503/000-dedf1e9480b3355845d0a3add71ff85acab1438a.jpg",
//                 "content_url": "http://www.fnnews.com/news/202411081415424634",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:23:00"
//             },
//             {
//                 "id": "1506381292437115501",
//                 "sections": [
//                     "society"
//                 ],
//                 "title": "시흥시, 강원바이오엑스포서 바이오 특화단지 공동정책관 운영",
//                 "publisher": "더팩트",
//                 "author": "",
//                 "summary": "경기 시흥시는 강원 춘천시에서 열리고 있는 ‘2024 강원 바이오엑스포’에서 전국 5개 바이오 특화단지(인천·경기시흥, 강원, 대전, 경북, 전남화순) 공동정책관에 참여해 홍보부스를 운영한다고 8일 밝혔다.\n\n지난 6일부터 8일까지 이어지는 2024 강원 바이오엑스포는 7일 춘천송암스포츠타운에서 개막했다.\n\n시흥시 관계자는 \"전국 5개 바이오 특화단지가 공동정책관을 운영하며 지자체별 성과를 공유하고 특화단지 간 연계·협력을 강화할 수 있어 의미가 크다\"며 \"인천과의 협력체계를 공고히 하고, 세계 1위 바이오 메가 클러스터 조성에 박차를 가하는 계기가 됐다\"고 말했다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/society/2024/11/08/1506381292437115501/000-605d247a44ef63ee946b230455741720dd28ad3d.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/society/2024/11/08/1506381292437115501/000-605d247a44ef63ee946b230455741720dd28ad3d.jpg",
//                 "content_url": "http://news.tf.co.kr/read/national/2149540.htm",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:23:00"
//             },
//             {
//                 "id": "1506381000513556768",
//                 "sections": [
//                     "sports"
//                 ],
//                 "title": "'에드워즈 33점' NBA 미네소타, 시카고에 낙승",
//                 "publisher": "SBS",
//                 "author": "",
//                 "summary": "▲&#160;앤서니 에드워즈 미국프로농구(NBA) 미네소타 팀버울브스가 '차세대 간판'으로 꼽히는 앤서니 에드워즈의 맹활약을 앞세워 시카고 불스에 낙승을 거뒀습니다.\n\n미네소타는 미국 일리노이주 시카고의 유나이티드 센터에서 열린 2024-2025 NBA 정규리그 원정 경기에서 시카고를 135대 119로 꺾었습니다.\n\nNBA의 차세대 간판으로 주목받는 미국 국가대표 가드 에드워즈가 3점 5방 포함, 33점을 올리며 펄펄 날았습니다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/sports/2024/11/08/1506381000513556768/000-ba344e83c1f09bae4240d6d75340413bd8340af2.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/sports/2024/11/08/1506381000513556768/000-ba344e83c1f09bae4240d6d75340413bd8340af2.jpg",
//                 "content_url": "https://news.sbs.co.kr/news/endPage.do?news_id=N1007865960",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:22:51"
//             },
//             {
//                 "id": "1506381000513556769",
//                 "sections": [
//                     "sports"
//                 ],
//                 "title": "MLB닷컴, 프리미어12 주목해야 할 선수 8명에 김도영 선정",
//                 "publisher": "KBS",
//                 "author": "",
//                 "summary": "올 시즌 프로야구 KIA의 우승을 이끌며 천재 타자로 거듭난 김도영을 향해 미국 MLB닷컴도 프리미어12에서 주목해야 할 선수라고 호평을 보냈습니다.\n\n미국프로야구 메이저리그 공식 홈페이지인 MLB닷컴은 오늘(8일) 프리미어12에서 주목해야 할 선수 8명을 소개했는데, 우리 대표팀 선수 중엔 유일하게 내야수 김도영(21, KIA)이 선정됐습니다.\n\n이어 MLB닷컴은 \"정교함과 장타력을 겸비한 한국 대표팀 3루수 김도영은 한국과 맞서는 모든 투수를 두렵게 할 타자\"라고 평가했습니다.",
//                 "image_url": null,
//                 "thumbnail_url": null,
//                 "content_url": "https://news.kbs.co.kr/news/pc/view/view.do?ncd=8101418&ref=A",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:22:42"
//             }
//           ]
//         }],
//         'section': [{
//           "data": [
//             {
//                 "id": "1506382500841263454",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "케이웨더, 미용시설 'AI환기청정솔루션' 적용…보급 확대",
//                 "publisher": "뉴시스",
//                 "author": "권안나",
//                 "summary": "신선한 공기 정화해서 유입…IoT 관리 편리 권안나 기자 = 날씨 빅데이터 플랫폼 기업 케이웨더가 미용시설에 '공기지능(AI, Air Intelligence) 환기청정솔루션'을 적용해 유해물질을 관리한다고 8일 밝혔다.\n\n케이웨더는 부산산업학교와 부산국제영화고등학교 미용실습실을 시작으로 모든 미용시설에 AI 환기청정솔루션 적용을 확대할 방침이다.\n\n김동식 케이웨더 대표이사는 \"미용실, 네입숍 등 미용시설은 오염물질로 인해 실내공기질 상태가 좋지 않지만 의무적으로 공기질을 측정하지 않아도 돼 사각지대에 놓여있다\"며 \"케이웨더의 AI환기청정솔루션을 통해 실내공기질 상태를 정확히 파악해 적절한 공기질을 관리할 수 있도록 하겠다\"고 말했다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263454/000-8a1c12def9a63b1b456e90aa49f4ede2bde909fe.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263454/000-8a1c12def9a63b1b456e90aa49f4ede2bde909fe.jpg",
//                 "content_url": "https://www.newsis.com/view/NISX20241108_0002952070",
//                 "esg": {
//                     "category": {
//                         "label": "E",
//                         "name": "환경",
//                         "score": 0.884
//                     },
//                     "polarity": {
//                         "label": "1",
//                         "name": "긍정",
//                         "score": 1.0
//                     }
//                 },
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:28:00"
//             },
//             {
//                 "id": "1506382500841263453",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "코스피, 장중 하락전환…고려아연 12%↓",
//                 "publisher": "이데일리",
//                 "author": "이용성",
//                 "summary": "외국인 ‘팔자’ vs 기관·개인 ‘사자‘ 업종별 하락 우위…철강금속 등 ↓ 고려아연 연내 임시주총 전망에 '뚝'[이데일리 이용성 기자] 상승 출발한 코스피가 장중 개인들이 순매도로 바꾸면서 하락 전환했다.\n\n8일 엠피닥터에 따르면 오후 2시5분 현재 코스피 지수는 전 거래일 대비 5.69포인트(0.22%) 내린 2558.94에 거래 중이다.\n\n반면 의약품은 1%대 강세고 건설업과 보험, 전기전자는 1%대 미만 수준으로 강보합세다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263453/000-f471107343c9306c73438729b050bd35eb8620e5.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263453/000-f471107343c9306c73438729b050bd35eb8620e5.jpg",
//                 "content_url": "http://www.edaily.co.kr/news/newspath.asp?newsid=05198806639083752",
//                 "esg": {
//                     "category": {
//                         "label": "U",
//                         "name": "해당없음",
//                         "score": 1.0
//                     },
//                     "polarity": {
//                         "label": "0",
//                         "name": "중립",
//                         "score": 1.0
//                     }
//                 },
//                 "companies": [
//                     {
//                         "name": "고려아연",
//                         "symbol": "010130",
//                         "exchange": "KRX",
//                         "sentiment": "negative"
//                     }
//                 ],
//                 "entities": [
//                     {
//                         "type": "company",
//                         "name": "KB금융"
//                     },
//                     {
//                         "type": "company",
//                         "name": "LG에너지솔루션"
//                     },
//                     {
//                         "type": "company",
//                         "name": "SK하이닉스"
//                     },
//                     {
//                         "type": "company",
//                         "name": "고려아연"
//                     },
//                     {
//                         "type": "company",
//                         "name": "기아"
//                     },
//                     {
//                         "type": "company",
//                         "name": "삼성바이오로직스"
//                     },
//                     {
//                         "type": "company",
//                         "name": "삼성전자"
//                     },
//                     {
//                         "type": "company",
//                         "name": "현대차"
//                     }
//                 ],
//                 "published_at": "2024-11-08T14:28:00"
//             },
//             {
//                 "id": "1506382500841263462",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "한샘, ‘안전한 주거환경 구현’ 위해 소방공무원 지원 앞장",
//                 "publisher": "한국일보",
//                 "author": "",
//                 "summary": "11월 9일 소방의 날을 앞두고 한샘의 꾸준한 소방공무원 지원 활동이 주목받고 있다.\n\n한샘은 소방공무원 지원을 통해 더욱 ‘안전한 주거환경’ 만들기를 돕고 있다.\n\n먼저 한샘은 소방공무원들이 쾌적한 환경에서 근무할 수 있도록 2020년 7월부터 노후 소방센터 환경개선 지원 사업을 이어오고 있다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263462/000-9fb3f90b233e83e2e4c590ecdaebf8f4424be701.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263462/000-9fb3f90b233e83e2e4c590ecdaebf8f4424be701.jpg",
//                 "content_url": "https://www.hankookilbo.com/News/Read/A2024110814200000798?did=NA",
//                 "esg": {
//                     "category": {
//                         "label": "S",
//                         "name": "사회",
//                         "score": 0.998
//                     },
//                     "polarity": {
//                         "label": "1",
//                         "name": "긍정",
//                         "score": 0.998
//                     }
//                 },
//                 "companies": [
//                     {
//                         "name": "한샘",
//                         "symbol": "009240",
//                         "exchange": "KRX",
//                         "sentiment": "positive"
//                     }
//                 ],
//                 "entities": [
//                     {
//                         "type": "company",
//                         "name": "한샘"
//                     }
//                 ],
//                 "published_at": "2024-11-08T14:27:00"
//             },
//             {
//                 "id": "1506382500841263461",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "마스턴프리미어리츠, '이사회 교체 요구'에 유상증자 배경 설명[시그널]",
//                 "publisher": "서울경제",
//                 "author": "",
//                 "summary": "\"해외 자산 보호하고 임대료 수입 유지\" 주주들로부터 이사회 교체 요구를 받은 마스턴프리미어리츠(357430)가 \"밸류업과 주주 이익을 최우선으로 하겠다\"는 내용의 주주서한을 공개했다.\n\n이들은 마스턴프리미어리츠가 추진하고 있는 120억 원 규모의 유상증자가 과도하다는 문제 등이 있다고 보고 있다.\n\n아울러 마스턴프리미어리츠는 \"이번 유상증자를 통해 해외 소재 편입 자산을 보호하고 임대료 수입을 안정적으로 유지할 수 있을 것\"이라고 했다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263461/000-eab8b6519a64821e4bc6e4e42a5d7b00de73b078.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263461/000-eab8b6519a64821e4bc6e4e42a5d7b00de73b078.jpg",
//                 "content_url": "https://www.sedaily.com/NewsView/2DGRL22CRZ",
//                 "esg": {
//                     "category": {
//                         "label": "U",
//                         "name": "해당없음",
//                         "score": 0.932
//                     },
//                     "polarity": {
//                         "label": "0",
//                         "name": "중립",
//                         "score": 1.0
//                     }
//                 },
//                 "companies": [
//                     {
//                         "name": "마스턴프리미어리츠",
//                         "symbol": "357430",
//                         "exchange": "KRX",
//                         "sentiment": "neutral"
//                     }
//                 ],
//                 "entities": [
//                     {
//                         "type": "company",
//                         "name": "마스턴프리미어리츠"
//                     }
//                 ],
//                 "published_at": "2024-11-08T14:27:00"
//             },
//             {
//                 "id": "1506382500841263460",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "[르포]비자 면제 첫날 한산한 中 공항 “다음에 올 땐 편하겠죠?”",
//                 "publisher": "이데일리",
//                 "author": "이명철",
//                 "summary": "이제 비자 면제가 시행됐으니까 한달 정도 지나면 중국을 찾는 여행객들이 더 많아지지 않을까요?” 8일 오전 중국 베이징 서우두공항 3터미널에서 한국인 관광객 등이 입국하고 있다.\n\n중국이 한국인에 대해 비자를 면제한 첫날인 8일 오전, 중국 베이징 서우두공항 3터미널에서는 한 현지 여행사 직원 A씨가 한국인 여행객을 기다리고 있었다.\n\n8일 오전 중국 베이징 서우두공항 3터미널에서 한국인 관광객 등이 입국하고 있다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263460/000-c6a71b6185b7b7f56268ac573a240dfcc5df19c4.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263460/000-c6a71b6185b7b7f56268ac573a240dfcc5df19c4.jpg",
//                 "content_url": "http://www.edaily.co.kr/news/newspath.asp?newsid=05195526639083752",
//                 "esg": {
//                     "category": {
//                         "label": "U",
//                         "name": "해당없음",
//                         "score": 0.999
//                     },
//                     "polarity": {
//                         "label": "0",
//                         "name": "중립",
//                         "score": 1.0
//                     }
//                 },
//                 "companies": [
//                     {
//                         "name": "대한항공",
//                         "symbol": "003490",
//                         "exchange": "KRX",
//                         "sentiment": "neutral"
//                     }
//                 ],
//                 "entities": [
//                     {
//                         "type": "company",
//                         "name": "대한항공"
//                     }
//                 ],
//                 "published_at": "2024-11-08T14:27:00"
//             },
//             {
//                 "id": "1506382500841263458",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "\"대대적 개편 마무리\"…매드포갈릭, 첫 리뉴얼 매장 '영등포타임스퀘어점' 오픈",
//                 "publisher": "데일리안",
//                 "author": "이나영",
//                 "summary": "엠에프지코리아(MFG KOREA)가 운영하는 매드포갈릭은 이탈리안 레스토랑의 아이덴티티를 유지하면서 우리 식문화를 결합한 ‘K-컬쳐드 이탈리안 레스토랑’으로 변화를 선언한 후 첫번째 리뉴얼 매장인 영등포타임스퀘어점을 전격 오픈한다고 8일 밝혔다.\n\n이날 오픈한 매드포갈릭 영등포타임스퀘어점은 새로워진 매드포갈릭의 방향성을 담은 첫번째 리뉴얼 매장이다.\n\n매드포갈릭은 첫번째 리뉴얼 매장인 영등포타임스퀘어점 방문 고객을 위한 할인 프로모션을 진행한다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263458/000-7cf825e182f4f7d6d691dc7ff462a6fc36150118.jpeg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263458/000-7cf825e182f4f7d6d691dc7ff462a6fc36150118.jpeg",
//                 "content_url": "https://www.dailian.co.kr/news/view/1426907/",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:27:00"
//             },
//             {
//                 "id": "1506382500841263457",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "[단독] 금투세 폐지에…'가상자산 과세 2년 유예' 힘 실린다",
//                 "publisher": "한국경제",
//                 "author": "",
//                 "summary": "금융투자소득세(금투세)의 폐지가 사실상 확정되면서 가상자산(암호화폐) 과세 또한 '2년 유예론'에 힘이 실리고 있는 것으로 나타났다.\n\n8일 더불어민주당 정책위원회 관계자는 블루밍비트와의 통화에서 \"가상자산 과세 폐지에 대한 논의는 없는 걸로 알고 있으나 금투세가 폐지된 상황에서 형평성을 위해 (가상자산 과세가) 유예될 것으로 전망된다\"라고 귀띔했다.\n\n내년 1월 1일 시행 예정인 가상자산 과세는 소득세법에 따라 가상자산의 양도 및 대여에 발생하는 소득을 기타소득으로 과세하는 것이 주요 골자다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263457/000-b0a9dadf029195471ed91d0b3d5080e7c85480e8.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263457/000-b0a9dadf029195471ed91d0b3d5080e7c85480e8.jpg",
//                 "content_url": "https://www.hankyung.com/article/202411077964g",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:27:00"
//             },
//             {
//                 "id": "1506382500841263455",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "\"고물가·소비심리 위축에\"…신세계, 3Q 영업익 29.4%↓(상보)",
//                 "publisher": "뉴스1",
//                 "author": "윤수희",
//                 "summary": "㈜신세계는 3분기 연결 기준으로 총매출 2조7089억 원, 영업이익 930억 원을 기록했다고 8일 공시했다.\n\n매출은 전년 동기 대비 4% 증가한 반면, 영업이익은 930억 원으로 29.4% 감소했다.\n\n신세계라이브쇼핑은 올 3분기 순매출액이 16.3% 증가한 770억 원, 영업이익은 1억 원 증가한 13억 원을 기록했다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263455/000-8b57bdd665508b6052ce3b45187d459120b1dd78.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263455/000-8b57bdd665508b6052ce3b45187d459120b1dd78.jpg",
//                 "content_url": "https://www.news1.kr/industry/distribution/5594405",
//                 "esg": {
//                     "category": {
//                         "label": "U",
//                         "name": "해당없음",
//                         "score": 0.996
//                     },
//                     "polarity": {
//                         "label": "0",
//                         "name": "중립",
//                         "score": 1.0
//                     }
//                 },
//                 "companies": [
//                     {
//                         "name": "신세계",
//                         "symbol": "004170",
//                         "exchange": "KRX",
//                         "sentiment": "negative"
//                     }
//                 ],
//                 "entities": [
//                     {
//                         "type": "company",
//                         "name": "신세계"
//                     }
//                 ],
//                 "published_at": "2024-11-08T14:27:00"
//             },
//             {
//                 "id": "1506382500841263445",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "SNT다이내믹스, 한국군사과학기술학회 추계학술대회 참가",
//                 "publisher": "서울신문",
//                 "author": "",
//                 "summary": "궤도차량용 자동변속기 기동성능분석 논문 주목SNT다이내믹스가 8일 대전컨벤션센터에서 열린 한국군사과학기술학회 추계학술대회에 참가해 기술개발 역량을 키웠다.\n\n이 중 기술연구소 이세혁 엔지니어가 주(主)저자로 발표한 궤도차량용 자동변속기 기동성능분석 연구 주제 논문은 학술대회 참가자들에게 많은 관심을 받았다.\n\nSNT다이내믹스는 학술대회 참가와 기술논문 발표 등으로 연구원들이 엔지니어링 기술개발 역량 한계에 도전하고 성장할 수 있도록 장려하고 있다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263445/000-31cd4e30ba713bdf3e2fd9299b64a818a24839e2.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263445/000-31cd4e30ba713bdf3e2fd9299b64a818a24839e2.jpg",
//                 "content_url": "https://www.seoul.co.kr/news/economy/industry/2024/11/08/20241108500139",
//                 "esg": {
//                     "category": {
//                         "label": "U",
//                         "name": "해당없음",
//                         "score": 0.996
//                     },
//                     "polarity": {
//                         "label": "0",
//                         "name": "중립",
//                         "score": 1.0
//                     }
//                 },
//                 "companies": [
//                     {
//                         "name": "SNT다이내믹스",
//                         "symbol": "003570",
//                         "exchange": "KRX",
//                         "sentiment": "neutral"
//                     }
//                 ],
//                 "entities": [
//                     {
//                         "type": "company",
//                         "name": "SNT다이내믹스"
//                     }
//                 ],
//                 "published_at": "2024-11-08T14:25:00"
//             },
//             {
//                 "id": "1506382500841263444",
//                 "sections": [
//                     "economy"
//                 ],
//                 "title": "코빗, 코인베이스와 업무 협약 체결…‘베이스체인’ 입출금 지원",
//                 "publisher": "한국경제",
//                 "author": "",
//                 "summary": "국내 가상자산(암호화폐) 거래소 코빗은 미국 가상자산 거래소 코인베이스와 ‘베이스(BASE)체인’ 네트워크 지원을 위한 업무 협약을 체결했다고 8일 밝혔다.\n\n이번 협약으로 코빗에서 베이스체인 입출금이 가능해졌다.\n\n오세진 코빗 대표는 \"코인베이스와 협업은 국내 가상자산 산업을 확장하는 데 도움이 될 것\"이라며 “급변하는 글로벌 트렌드에 발맞춘 비즈니스 모델을 개발해 시장 경쟁력을 확보할 수 있는 계기가 마련됐다.",
//                 "image_url": "https://ddi-cdn.deepsearch.com/news/economy/2024/11/08/1506382500841263444/000-e56fc38a1552cd2bcd73755743198abca9d84a8a.jpg",
//                 "thumbnail_url": "https://ddi-cdn.deepsearch.com/news_thumbnail/economy/2024/11/08/1506382500841263444/000-e56fc38a1552cd2bcd73755743198abca9d84a8a.jpg",
//                 "content_url": "https://www.hankyung.com/article/202411088704O",
//                 "esg": null,
//                 "companies": [],
//                 "entities": [],
//                 "published_at": "2024-11-08T14:25:00"
//             }
//         ]
//         }]
//       };
//       commit('setMainItems', mainData);
//       console.log(mainData);
//     }
//   }
// }

//디테일 모듈
const detailDataModule = {
  namespaced: true,
  state: {
    detailItem: {}
  },
  getters:{
    getDetailItem(state) {
      return state.detailItem;
    }
  },
  mutations: {
    setDetailItem(state, detailData) {
      state.detailItem = detailData;
      console.log(detailData);
    },
    clearDetailItem(state) {
      state.detailItem = {};
    }
  },
  actions: {
    saveDetailData({commit}, detailData){
      commit('setDetailItem', detailData) 
    },
    clearDetailData({ commit }) {   //외부호출용
      commit('clearDetailItem');
    }
  }
}

//검색 모듈
const searchDataModule = {
  namespaced: true,
  state: {
    searchItems: []
  },
  getters:{
    getSearchItems(state) {
      return state.searchItems;
    }
  },
  mutations: {
    setSearchItems(state, searchData) {
      state.searchItems = searchData;
      console.log(searchData);
    },
    clearSearchItems(state) {
      state.searchItems = [];
    }
  },
  actions: {
    saveSearchData({commit}, searchData){
      commit('setSearchItems', searchData)    
    },
    clearSearchData({ commit }) {   //외부 호출용
      commit('clearSearchItems');
    }
  }  
}


export default createStore({
  modules: {  //스토어의 모듈화, 여러 개로 분리시키는 곳
    localOrGlobalModule: localOrGlobalModule,
    // mainDataModule: mainDataModule,
    detailData: detailDataModule,
    searchData: searchDataModule
  }
})