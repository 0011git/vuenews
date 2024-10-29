<template>
    <div class="searchResult">
        <ul class="newsWrap">
            <li class="strapWrap"><StrapNews /></li>
            <li class="strapWrap"><StrapNews /></li>
            <li class="strapWrap"><StrapNews /></li>
            <li class="strapWrap"><StrapNews /></li>
            <li class="strapWrap"><StrapNews /></li>
            <li class="strapWrap"><StrapNews /></li>
            <li class="strapWrap"><StrapNews /></li>
            <li class="strapWrap"><StrapNews /></li>
            <li class="strapWrap"><StrapNews /></li>            
        </ul>
    </div>
</template>
<script>
import StrapNews from '@/components/StrapNews.vue'
export default {
    name: 'SearchView',
    components: {
        StrapNews
    }    
}
</script>
<style lang="scss">
    .searchResult{
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