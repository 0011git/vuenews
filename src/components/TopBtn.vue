<template>
    <div class="topBtnBlock">
        <div @click="$emit('scrollToTop')"  :class="['topBtnWrap', {show:isTopBtnVisible}]">
            <button type="button"></button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["isTopBtnVisible"]
}
</script>

<style lang="scss">
.topBtnBlock{
    .topBtnWrap{
        width: 48px;
        height: 48px;
        position: fixed;
        bottom: 4%;
        right: 4%;
        background-color: #ffffff;
        border-radius: 100px;
        border: 1px solid #1f1f1f;
        cursor: pointer;
        z-index: 99;
        transform: translateY(200%);
        &.show{
            transform: translateY(0%);
        }
        button{
            position: relative;
            cursor: pointer;
            &::after{
                width: 24px;
                height: 24px;
                position: absolute;
                top: 0;
                left: 0;
                transform: translateX(50%);
                content: '';
                display: block;
                background: url('../assets/arrow_up.svg') center no-repeat;
            }
        }
    }
}
</style>