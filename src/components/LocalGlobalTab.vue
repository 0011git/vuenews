<!-- https://news.deepsearch.com/api/#tag/%EA%B5%AD%EB%82%B4-%EA%B8%B0%EC%82%AC/operation/get_articles_v1_articles_get -->
<template>
    <div class="localGlobalTabWrap">
        <ul>
            <li @click="onToggle(0)" :class="{'active':isActive[0]}">국내</li>
            <li @click="onToggle(1)" :class="{'active':isActive[1]}">해외</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return { isActive: [true, false],  }
    },
    methods:{
        onToggle(index){
            this.isActive = this.isActive.map((li, idx) => idx === index);
        }
    }
}
</script>
<style lang="scss">
.localGlobalTabWrap{
    ul{
        display: flex;
        justify-content: start;
        align-items: center;
        >li{
            min-width: 48px;
            padding: 4px 8px 8px 8px;
            border-bottom: 4px solid #ffffff;
            cursor: pointer;
            &.active{
                font-weight: 700;
                border-bottom: 4px solid #1f1f1f;
            }
        }
    }
}
</style>