<template>
    <div class="sectionWrap">
        <h2 class="sectionTitle">
            정치
        </h2>
        <ul class="newsWrap">
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
    components : {
        StrapNews,
    }
    
}
</script>
<style lang="scss">
.sectionWrap{
    .sectionTitle{
        font-size: 20px;
        margin: 16px 0 32px;
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