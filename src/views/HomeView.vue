<template>
  <div class="home">
    <NavMenu />
    <div class="localGlobalTabWrap">
      <LocalGlobalTab :onWorldTab="onWorldTab" />
    </div>
      
      <section>
        <h2>방금 업데이트된 뉴스</h2>
        <div class="visualNewsWrap">
          <figure class="visualWrap" v-for="todayNews in (dummyData.today[0].data).slice(0,4)" :key="todayNews.id" @click="goToDetail(todayNews)">   <!-- @click="goToDetailMixin"-->
            <div :class="['imgWrap', {noImg: !todayNews.image_url}]">
                <span class="imgDimmer"></span>
                <img :src="todayNews.image_url" :alt="todayNews.title" />
            </div>
            <figcaption class="textWrap">
                <h3 class="twoline visualTitle">{{ todayNews.title }}</h3>
                <span class="twoline visualDate">{{ todayNews.published_at.replace('T', ' ').slice(0, -3) }} {{ todayNews.publisher }}</span>
                <p class="fourline visualSummary"> {{ todayNews.summary }}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <h2>오늘의 뉴스</h2>
        <div v-for="todayNews in (dummyData.today[0].data).slice(4)" :key="todayNews.id" class="cardNewsWrap">     <!-- @click="goToDetail(todayNews)"-->
          <CardNews :news="todayNews" />
        </div>
      </section>
  
      <section>
        <h2>섹션별</h2>
        <div class="sectionBtnsWrap">
          <ul>        
            <li @click="changeSection(0)" :class="{clicked: sectionIdx === 0}">정치</li>
            <li @click="changeSection(1)" :class="{clicked: sectionIdx === 1}">경제</li>
            <li @click="changeSection(2)" :class="{clicked: sectionIdx === 2}">사회</li>
            <li @click="changeSection(3)" :class="{clicked: sectionIdx === 3}">문화</li>
            <li @click="changeSection(4)" :class="{clicked: sectionIdx === 4}">세계</li>
            <li @click="changeSection(5)" :class="{clicked: sectionIdx === 5}">기술</li>
            <li @click="changeSection(6)" :class="{clicked: sectionIdx === 6}">연예</li>
            <li @click="changeSection(7)" :class="{clicked: sectionIdx === 7}">오피니언</li>
          </ul>
        </div>
        <div class="strapContents">
          <!-- <div v-for="sectionNews in mainItems.section[sectionIdx].sectionArr[sectionIdx].data" :key="sectionNews.id" class="strapNewsWrap">   @click="goToDetail(todayNews)" -->
          <div v-for="sectionNews in dummyData.section[0].data" :key="sectionNews.id" class="strapNewsWrap">   <!-- @click="goToDetail(todayNews)"-->
            <StrapNews :news="sectionNews" />
          </div>
        </div>
      </section>

  </div>
</template>

<script>
import CardNews from '@/components/CardNews.vue';
import StrapNews from '@/components/StrapNews.vue';
import LocalGlobalTab from '@/components/LocalGlobalTab.vue';
import { mainApi, sectionApi } from '@/api/apifunc';
import dummyData from '@/assets/data.json';  //나중에 삭제
import { useRouter } from 'vue-router';

// @ = /src

export default {
  name: 'HomeView',
  computed:{
    
  },
  data(){
    return {
      sectionIdx: 1,  //기본0
      sectionArr:  ['politics', 'economy', 'society', 'culture', 'world', 'tech', 'entertainment', 'opinion'],
      dummyData,
      world: 'local'
    }
  },
  watch:{
    world(){
      this.fetchMainData();   // 국내/해외 값이 변경될 때 메인 데이터 재요청
    }
  },
  components: {
    CardNews,
    StrapNews,
    LocalGlobalTab
  },
  methods: {
    onWorldTab(num) {
      num === 0 ? this.world = 'local' : this.world = 'global'
      console.log(`${this.world}메인`);
    },
    // 상세 페이지로 가기
    goToDetail(obj){
      const router = useRouter();
      const data = JSON.stringify(obj);
      router.push({ path: '/detail' , query: { ...data } });
    },
    // 데이터 패치 함수
    async fetchMainData(){
      this.mainData = await mainApi(this.world);
    },    
    //섹션별 컨텐츠에서 섹션 버튼 클릭했을 때
    async changeSection(idx) {
      this.mainData = await sectionApi(this.world, this.sectionArr[idx]);
      console.log(`${this.sectionArr[idx]} 패치 완료`);
      this.sectionIdx = idx
    },
    
  },
  created(){
    // this.fetchMainData(); // 메인 최초 실행 시 데이터 패치 함수 실행
  }
}
</script>



<style lang="scss">
  .home{
    section{
      &:first-of-type{
        margin-top: 32px;
      }
      &:not(:last-of-type){
        margin-bottom: 60px;
      }
      &:last-of-type{
        margin-bottom: 100px;
      }
      h2{
        margin-bottom: 32px;
        font-size: 24px;
        text-align: start;  
      }

      .visualNewsWrap{
        margin-bottom: 60px;
        .visualWrap{
          min-width: 320px;
          padding-bottom: 20px;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.2s;
          &:not(:last-of-type){
            margin-bottom: 60px;
          }
          &:hover{
            .imgWrap{
              .imgDimmer{
                display: block;
              }
            }
          }
          .imgWrap{
              border-radius: 20px;
              overflow: hidden;
              position: relative;
              .imgDimmer{
                width: 100%;
                height: 100%;
                background-color: rgba($color: #000000, $alpha: 0.2);
                position: absolute;
                top: 0;
                left: 0;
                display: none;
              }
              &.noImg{
                  min-height: 240px;
              }
          }
          .textWrap{
              margin: 16px 8px 0;
              .visualTitle{
                margin-bottom: 8px;  
                font-size: 20px;
                font-weight: 700;
              }
              .visualDate{
                margin-bottom: 16px;
                font-size: 14px;
                color: #cccccc;
              }
              .visualSummary{
                font-size: 16px;
                line-height: 160%;
              }
          }
        }
      }
      .cardNewsWrap{
        &:not(:last-of-type){
          margin-bottom: 32px;
        }
      }

      .sectionBtnsWrap{
        min-width: 320px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        ul{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          border: 0.5px solid #cccccc;
          li{
              width: 100%;
              padding: 8px 16px;
              text-align: center;
              border: 0.5px solid #cccccc;
              font-size: 16px;
              cursor: pointer;
              background-color: #ffffff;
              white-space: nowrap;
              &.clicked{
                  font-weight: 700;
              }                
          }
        }
      }
      .strapContents{
        .strapNewsWrap{
          &:not(:last-of-type){
            margin-bottom: 40px;
          }
        }
      }
    }
  }
</style>
