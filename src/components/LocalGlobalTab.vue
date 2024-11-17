<template>
    <div class="localGlobalTabWrap">
        <ul>
            <li @click="onTabToggle(0)" :class="{'active':this.tab === 0}">국내</li>
            <li @click="onTabToggle(1)" :class="{'active':this.tab === 1}">해외</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return { 
            tab: 0,
            world: 'local'
        }

    },
    computed: {
    },
    props: {
        onWorldTab: {
            type: Function,
            required: true,
        }
    },
    methods:{        
        onTabToggle(index){
            this.tab = index;
            if(index === 0) {
                this.onWorldTab(0);
                this.world='local'
                console.log(this.world);
            }else {
                this.onWorldTab(1)
                this.world='global'
                console.log(this.world);
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