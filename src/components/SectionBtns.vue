<template>
    <div class="sectionBtnsWrap">
        <ul>        
            <li><button class="clicked" type="button">정치</button></li>
            <li><button type="button">경제</button></li>
            <li><button type="button">사회</button></li>
            <li><button type="button">문화</button></li>
            <li><button type="button">세계</button></li>
            <li><button type="button">기술</button></li>
            <li><button type="button">연예</button></li>
            <li><button type="button">오피니언</button></li>
        </ul>
    </div>
</template>
<script>
export default {
    
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
                border: 0.5px solid #cccccc;
                button{
                    width: 100%;
                    padding: 8px 16px;
                    text-align: center;
                    font-size: 14px;
                    white-space: nowrap;
                    cursor: pointer;
                    background-color: #ffffff;
                    &.clicked{
                        font-weight: 700;
                    }
                }
            }
        }
    }
</style>