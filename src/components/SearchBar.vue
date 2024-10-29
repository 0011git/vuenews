<template>
    <div class="searchBarWrap">        
        <div @click="goBack" class="backBtnWrap">
            <button></button>
        </div>
        <div class="inputWrap">
            <input type="text" id="keyword" placeholder="검색어를 입력하세요."/>
            <label for="keyword"></label>
            <button></button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1); // 이전 페이지로 이동
        }
    }
}
</script>
<style lang="scss">
    .searchBarWrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .backBtnWrap{
            margin-right: 4px;
            // cursor: pointer;
            button{
                cursor: pointer;
                margin-right: 4px;
                position: relative;
                &::after{
                    width: 32px;
                    height: 32px;
                    display: block;
                    content: '';
                    background: url('../assets/arrow_left.svg') center no-repeat;
                    background-size: contain;
                }
            }
        }
        .inputWrap{
            width: 100%;
            input{
                width: 100%;
                height: 100%;
                min-width: 200px;
                min-height: 32px;
                padding: 16px 40px 16px 16px;
                font-size: 16px;
                background-color: #eeeeee;
                &::placeholder{
                    color: #cccccc;
                }
                border: none;
                border-radius: 8px;
                &:focus{
                    background-color: #ffffff;
                    border: 1px solid #1f1f1f;
                    color: #1f1f1f;
                }
            }
            button{
                position: relative;
                &::after{
                    width: 32px;
                    height: 32px;
                    margin-right: 4px;
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 16px;
                    // left: -5%;
                    transform: translate(50%, -50%);
                    background: url('../assets/search.svg') center no-repeat;
                    background-size: contain;
                }
            }

        }
    }
</style>