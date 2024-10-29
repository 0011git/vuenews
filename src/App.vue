<!-- <nav>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/result">Result</router-link>
</nav> -->
<template>
  <main>    
    <SearchBox :isSearchBoxVisible="isSearchBoxVisible" :lockScroll="lockScroll" @showSearchBox="showSearchBox" />
    <NavMenu :isNavVisible="isNavVisible" :lockScroll="lockScroll" @showNav="showNav" />
    <Header :isHeaderVisible="isHeaderVisible" @showNav="showNav" @showSearchBox="showSearchBox" />
    <div class="contentsCommon"><router-view/></div>
    <TopBtn :isTopBtnVisible="isTopBtnVisible" @scrollToTop="scrollToTop" />
    <Footer />
  </main>
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
import TopBtn from '@/components/TopBtn.vue'
import Footer from '@/components/FooterComponent.vue'
import NavMenu from '@/components/NavMenu.vue'
import SearchBox from '@/components/SearchBox.vue'


export default {
  components: {
    Header,
    TopBtn,
    Footer,
    NavMenu,
    SearchBox
},
  data(){
    return { 
      isNavVisible: false, 
      isSearchBoxVisible: false, 
      isHeaderVisible: true,
      isTopBtnVisible: true,
      lockScroll: false, 
      lastScrollY: 0,
    }
  },
  methods:{
    showNav(){  //버거메뉴
      this.isNavVisible = !this.isNavVisible;
    },
    showSearchBox(){//상단검색창
      this.isSearchBoxVisible = !this.isSearchBoxVisible;
    },
    showHeader(){ //스크롤시 헤더 show/hide
      this.isHeaderVisible = !this.isHeaderVisible;
    },
    showTopBtn(){ //스크롤시 헤더 show/hide
      this.isTopBtnVisible = !this.isTopBtnVisible;
    },
    toggleScrollLock() { //버거메뉴, 상단검색창 오픈 시 스크롤x   
      this.lockScroll = !this.lockScroll;
    },
    updateScrollLock() { //버거메뉴, 상단검색창 오픈 시 스크롤x 
      const isVisible = this.isNavVisible || this.isSearchBoxVisible;
      this.lockScroll = isVisible; // nav 또는 searchbox가 보일 때 스크롤 잠금
      document.body.style.overflow = isVisible ? 'hidden' : 'auto'; // body 스크롤 잠금
    },
    onScroll() { //스크롤시 헤더|탑버튼 show/hide
      const scrollY = window.scrollY;
      if (scrollY > this.lastScrollY) {
          this.isHeaderVisible = false;
          this.isTopBtnVisible = false;
      } else {
        this.isHeaderVisible = true;
        this.isTopBtnVisible = true;
      }
      this.lastScrollY = scrollY;
    },
    scrollToTop(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  },
  watch: {
        isNavVisible : 'updateScrollLock',
        isSearchBoxVisible : 'updateScrollLock'
  },
  mounted() {
        window.addEventListener('scroll', this.onScroll);

  },
  beforeUnmount() {
      window.removeEventListener('scroll', this.onScroll);
  },
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  color: #1F1F1F;
  font-size: 16px;
}


*{
  box-sizing: border-box;
}

main{
  position: relative;
  

}

.contentsCommon{
  padding-top: 60px;
  margin: 0px 20px 100px;
}
// .logo32{
//   width: 208px;
//   height: 37px;
//   background: url("../src/assets/logo_32.svg") center no-repeat;
//   cursor: pointer;
// }
.logo24{
  width: 155px;
  height: 32px;
  background: url("../src/assets/logo_24.svg") center no-repeat;
  cursor: pointer;
}



body, h1, h2, h3, h4, h5, p, ul, li, div, a, button, input, span, figure, figcaption{
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
  color: #1f1f1f;
  text-align: start;
  list-style-type: none;
  vertical-align: middle;
  background-color: transparent;
}

//두 줄 이상 ...줄이기
.twoline{
    display: -webkit-box; /* Flexbox를 사용할 때 */            
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 줄 수 설정 */
    overflow: hidden;
    text-overflow: ellipsis; /* 생략 기호(...) 표시 */
}

img {
    width: 100%;
    height: 100%;
    border: none;
    vertical-align: middle;
}
</style>
