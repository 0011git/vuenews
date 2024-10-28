<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/result">Result</router-link>
  </nav> -->
  <main>
    <Header />
    <div class="contentsCommon"><router-view/></div>
    <TopBtn />
    <Footer />
  </main>
</template>
<script>
import Header from '@/components/HeaderComponent.vue'
import TopBtn from '@/components/TopBtn.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  components: {
    Header,
    TopBtn,
    Footer
  }
  
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
  margin: 60px 20px 120px;
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
.burger{  
  width: 32px;
  height: 32px;
  background: url("../src/assets/burger.svg") center no-repeat;
  cursor: pointer;
}
.search{
  width: 32px;
  height: 32px;
  background: url("../src/assets/search.svg") center no-repeat;
  cursor: pointer;
}

body, h1, h2, h3, h4, h5, p, ul, li, button, span, figure, figcaption{
  padding: 0;
  margin: 0;
  border: 0;
  text-align: start;
  list-style-type: none;
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
    vertical-align: middle;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:not(:last-of-type)::after{
      padding: 0 8px;
      content: '|';
      color: #2c3e50;
    }
  }
}
</style>
