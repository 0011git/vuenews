<template>
    <div class="searchResult">
        <h2>
            "{{ keyword }}" 검색 결과
        </h2>

        <ul class="newsWrap">
            <li v-for="item in dummyData.today[0].data" :key="item.id" class="strapWrap">
                <StrapNews :news="item" />
            </li>           
        </ul>

        <div class="btnWrap">
            <button class="loadMore" type="button" @click="fetchSearchData()">
                더 많은 검색 결과 보기
            </button>
        </div>
    </div>
</template>


<script>
import StrapNews from '@/components/StrapNews.vue'
import dummyData from '@/assets/data.json';  //나중에 삭제
// import { searchApi } from '@/api/apifunc';
import { goToDetailMixin } from '@/mixins/goToDetail.js';


export default {
    name: 'SearchView',
    components: {
        StrapNews
    },
    data(){
        return {
            dummyData,
            searchData: [],
            pageNum: 1
        }
    },
    props: {
        world: {
            type: String,
            required: true
        },
        keyword: {
            type: String,
            required: true
        }
    },
    methods: {
        mixins: [goToDetailMixin],
        async fetchSearchData(){
            // this.searchData += await searchApi(this.world, this.keyword, this.pageNum);
            this.pageNum++;
            console.log(this.pageNum);
        }
    },
    created() {
        // this.fetchSearchData(); //처음 페이지 진입하면 이거 실행
    },
}
</script>


<style lang="scss">
    .searchResult{
        >h2{
            margin: 12px 0 36px;
            font-size: 20px;
        }
        .newsWrap{
            margin-bottom: 52px;
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
        .btnWrap{
            // margin: 0 auto;
            margin-bottom: 120px;
            .loadMore{
                padding: 8px 48px;
                // margin: 0 auto;
                border: 1px solid #1f1f1f;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }
</style>