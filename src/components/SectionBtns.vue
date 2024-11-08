<template>
    <div class="sectionBtnsWrap">
        <ul>        
            <li @click="setSectionIdx(0)" :class="{clicked: sectionIdx === 0}">정치</li>
            <li @click="setSectionIdx(1)" :class="{clicked: sectionIdx === 1}">경제</li>
            <li @click="setSectionIdx(2)" :class="{clicked: sectionIdx === 2}">사회</li>
            <li @click="setSectionIdx(3)" :class="{clicked: sectionIdx === 3}">문화</li>
            <li @click="setSectionIdx(4)" :class="{clicked: sectionIdx === 4}">세계</li>
            <li @click="setSectionIdx(5)" :class="{clicked: sectionIdx === 5}">기술</li>
            <li @click="setSectionIdx(6)" :class="{clicked: sectionIdx === 6}">연예</li>
            <li @click="setSectionIdx(7)" :class="{clicked: sectionIdx === 7}">오피니언</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {

    },
    data(){
        return {sectionIdx: 0}
    },
    methods: {
        setSectionIdx(idx){
            this.sectionIdx = idx
        }
    }
}
</script>


<style lang="scss">
    .sectionBtnsWrap{
        min-width: 320px;
        display: flex;
        flex-direction: column;
        ul{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            border: 0.5px solid #cccccc;
            li{
                width: 100%;
                padding: 8px 16px;
                text-align: center;
                border: 0.5px solid #cccccc;
                font-size: 16px;
                cursor: pointer;
                background-color: #ffffff;
                white-space: nowrap;
                &.clicked{
                    font-weight: 700;
                }                
            }
        }
    }
</style>