<template>
    <a href="/detail">
        <figure class="strapWrap">
            <figcaption class="textWrap">
                <h3 class="twoline">'비침습 연속혈당측정기' 개발 기업 아폴론, 중기부 장관상 수상</h3>
                <span class="twoline">2024.01.01 조선일보</span>
            </figcaption>
            <div class="imgWrap"><img src="#" alt="" /></div>
        </figure>
    </a>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
     .strapWrap{
        min-width: 320px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .textWrap{
            margin-right: 8px;
            h3{
                margin-bottom: 4px;
                font-weight: 400;
            }
            span{
                font-size: 12px;
                color: #cccccc;
            }
        }
        .imgWrap{
            min-width: 80px;
            min-height: 80px;
            border-radius: 8px;
            overflow: hidden;
            img{
                background-color: #42b983;
            }
        }

    }
</style>