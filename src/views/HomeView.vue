<template>
  <div class="home">
    
   
    <NavMenu />
    <div class="localGlobalTabWrap">
      <LocalGlobalTab />
    </div>

    <section>
      <h2>오늘의 뉴스</h2>
      <div class="cardNewsWrap"><CardNews /></div>
      <div class="cardNewsWrap"><CardNews /></div>
      <div class="cardNewsWrap"><CardNews /></div>
      <div class="cardNewsWrap"><CardNews /></div>
    </section>

    <section>
      <h2>섹션별</h2>
      <div class="sectionBtnsWrap">
        <SectionBtns />
      </div>
      <div class="strapNewsWrap"><StrapNews /></div>
      <div class="strapNewsWrap"><StrapNews /></div>
      <div class="strapNewsWrap"><StrapNews /></div>
      <div class="strapNewsWrap"><StrapNews /></div>
      <div class="strapNewsWrap"><StrapNews /></div>
      <div class="strapNewsWrap"><StrapNews /></div>
      <div class="strapNewsWrap"><StrapNews /></div>
      <div class="strapNewsWrap"><StrapNews /></div>
    </section>
    
  </div>
</template>

<script>
import CardNews from '@/components/CardNews.vue';
import StrapNews from '@/components/StrapNews.vue';
import SectionBtns from '@/components/SectionBtns.vue';
import LocalGlobalTab from '@/components/LocalGlobalTab.vue'
import { mapState } from 'vuex';



// @ is an alias to /src
export default {
  name: 'HomeView',
  data(){
    return {  }
  },
  computed:{
    ...mapState("mainData",['items'])
  },
  components: {
    CardNews,
    StrapNews,
    SectionBtns,
    LocalGlobalTab
  },
  methods: {    
    
  },
  created(){
    
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
      .strapNewsWrap{
        &:not(:last-of-type){
          margin-bottom: 40px;
        }
      }
    }
  }
</style>
