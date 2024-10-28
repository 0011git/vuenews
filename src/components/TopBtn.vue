<template>
    <div @click="scrollToTop" class="topBtnWrap" :if="isVisible">
        <button type="button"></button>
    </div>
</template>

<script>
export default {
    name: "TopBtn",
    data(){
        return{ 
            lastScrollY: 0,
            isVisible: true
        }
    },
    mounted() {
        this.$refs.scrollContainer.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        this.$refs.scrollContainer.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        onScroll(){
            const scrollTop = this.$refs.scrollContainer.scrollTop;
            if (scrollTop > this.lastScrollTop) {
                this.isVisible = false;
                console.log('스크롤 다운');
            } else if (scrollTop < this.lastScrollTop) {
                console.log('스크롤 업');
                this.isVisible = true;
            }
            this.lastScrollY = scrollY;
        }
    },
    scrollToTop() {
      this.$refs.scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
</script>
<style lang="scss">
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
        button{
            &::after{
                width: 24px;
                height: 24px;
                content: '';
                display: block;
                background: url('../assets/arrow_up.svg') center no-repeat;
            }
        }
    }
</style>