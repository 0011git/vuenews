<template>
  <div class="home">
    <div class="localGlobalTabWrap">
      <LocalGlobalTab />
    </div>

    <section>
      <h2>오늘의 뉴스</h2>
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

// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    CardNews,
    StrapNews,
    SectionBtns,
    LocalGlobalTab
  }
}
</script>

<style lang="scss">
  .home{
    .localGlobalTabWrap{
      margin-bottom: 32px;
    }
    section{

      &:not(:last-of-type){
        margin-bottom: 60px;
      }
      h2{
        margin-bottom: 14px;
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
        margin: 10px 0 28px;
      }
      .strapNewsWrap{
        &:not(:last-of-type){
          margin-bottom: 16px;
        }
      }
    }
  }
</style>
