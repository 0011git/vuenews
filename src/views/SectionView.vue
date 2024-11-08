<template>
    <div class="sectionWrap">
        <h2 class="sectionTitle">
            {{ world === 'local' ? sectionArrKor[idx] : sectionArr[idx] }}
        </h2>
        <ul class="newsWrap">
            <li class="strapWrap" v-for="sectionNews in (dummyData.section[0].data)" :key="sectionNews.id">
                <StrapNews :news="sectionNews" />
            </li>
        </ul>
    </div>
</template>


<script>
import dummyData from '@/assets/data.json';  //나중에 삭제
import { sectionApi } from '@/api/apifunc';
import StrapNews from '@/components/StrapNews.vue'
import { mapState } from 'vuex';

export default {
    computed:{
        ...mapState("localOrGlobalModule", ['world']),
    },
    data() {
        return { 
            dummyData, //나중에 삭제
            sectionData: [],    //dummydata 대체할거
            sectionArr:  ['politics', 'economy', 'society', 'culture', 'world', 'tech', 'entertainment', 'opinion'],
            sectionArrKor: ['정치', '경제', '사회', '문화', '세계', '기술', '연예', '오피니언'],
        }
    },
    components : {
        StrapNews,
    },
    props: {
        idx: {
            type: Number,
            required: true
        }
    },
    methods: {
        async fetchSectionData(){
            this.sectionData =  await sectionApi(this.world, this.sectionArr[this.idx])
        }
    },
    created() {
        console.log(`${this.world} ${this.sectionArrKor[this.idx]} 데이터 요청 성공`);
        // this.fetchSectionData();
    }    
}
</script>


<style lang="scss">
.sectionWrap{
    .sectionTitle{
        margin: 16px 0 32px;
        font-size: 20px;
        text-transform: capitalize;
    }
    .newsWrap{
        margin-top: 32px;
        .strapWrap{
            padding-bottom: 8px;
            &:not(:last-of-type){
                margin-bottom: 32px;
            }
            &:nth-of-type(4n):not(:last-of-type){
                border-bottom: 1px dotted #cccccc;
            }
        }
    }
}
    
</style>