<template>
    <div class="sectionBtnsWrap">
        <ul>        
            <li :class="{clicked: isClicked}">정치</li>
            <li>경제</li>
            <li>사회</li>
            <li>문화</li>
            <li>세계</li>
            <li>기술</li>
            <li>연예</li>
            <li>오피니언</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {isClicked:[false, false, false, false, false, false, false, false]}
    },
    methods: {
        setIsClicked(){

        }
    }
    
}
</script>
<style lang="scss">
    .sectionBtnsWrap{
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
                font-size: 14px;
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