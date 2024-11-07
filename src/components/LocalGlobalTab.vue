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
import { mapState, mapActions } from 'vuex';

export default {
    data(){
        return { isActive: [true, false],  }
    },
    computed: {
        ...mapState("localOrGlobalModule", ['world']),
    },
    methods:{
        ...mapActions('localOrGlobalModule', ['isLocal']), // Vuex action을 불러오기
        onToggle(index){
            this.isActive = this.isActive.map((li, idx) => idx === index);
            if(index === 0) {
                this.isLocal(true);
                console.log(this.world);
            }else {
                this.isLocal(false);
                console.log(this.world);    //클릭 시 전역값 변경되는 것까지 확인
            }
        }
    }
}
</script>


<style lang="scss">
.localGlobalTabWrap{
    ul{
        border-bottom: 0.5px solid #cccccc;
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