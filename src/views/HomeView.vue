<template>
  <div class="home">  
    <NavMenu />
    <div class="localGlobalTabWrap">
      <LocalGlobalTab />
    </div>

      <section>
        <h2>오늘의 뉴스</h2>
        <div v-for="todayNews in localOrGlobal.today[0].data" :key="todayNews.id" @click="goToDetail(todayNews)" class="cardNewsWrap">
          <CardNews :news="todayNews" />
        </div>
      </section>
  
      <section>
        <h2>섹션별</h2>
        <div class="sectionBtnsWrap">
          <SectionBtns />
        </div>
        <div class="strapContents">
          <div v-for="sectionNews in localOrGlobal.section[0].politics.data" :key="sectionNews.id" @click="goToDetail(todayNews)" class="strapNewsWrap">
            <StrapNews :news="sectionNews" />
          </div>
        </div>
      </section>

  </div>
</template>

<script>
import CardNews from '@/components/CardNews.vue';
import StrapNews from '@/components/StrapNews.vue';
import SectionBtns from '@/components/SectionBtns.vue';
import LocalGlobalTab from '@/components/LocalGlobalTab.vue'
import { mapState, mapActions } from 'vuex';
import { goToDetailMixin } from '@/mixins/goToDetail';


// @ = /src
export default {
  name: 'HomeView',
  data(){
    return {  }
  },
  computed:{
    ...mapState("mainData", ['mainItems']),
    localOrGlobal(){
      return this.local ? this.mainItems.local : this.mainItems.global;
    }
  },
  components: {
    CardNews,
    StrapNews,
    SectionBtns,
    LocalGlobalTab
  },
  methods: {    
    ...mapActions('mainData', ['fetchMainData']),
    ...mapActions('DetailDataModule', ['saveDetailData']),
    ...mapActions('localOrGlobal', ['local'] ),

    mixins: [goToDetailMixin]
    
  },
  created(){
    this.fetchMainData();
  },
  mounted(){
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
        margin-bottom: 24px;
        font-size: 24px;
        text-align: start;  
      }
      .cardNewsWrap{
        &:not(:last-of-type){
          margin-bottom: 32px;
        }
      }
      .sectionBtnsWrap{
        width: 100%;
        margin-bottom: 24px;
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
