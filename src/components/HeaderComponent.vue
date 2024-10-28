<template>
    <header v-if = 'isVisible'>
        <div class="headerWrap" ref="scrollContainer">
            <div class="burger"></div>
            <router-link to="/"><h1 class="logo24"></h1></router-link>
            <div class="search"></div>
        </div>
  </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    data(){
        return{ 
            lastScrollY: 0,
            isVisible: true
        }
    },
    mounted() {
        this.$refs.scrollContainer.addEventListener('scroll', this.onScroll);
    },
    beforeUnmount() {
        this.$refs.scrollContainer.removeEventListener('scroll', this.onScroll);
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
    }
    
    
}
</script>

<style lang="scss">
    header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #ffffff;
        z-index: 99;
        transition: 0.3s;
        .headerWrap{
            width: 100%;
            height: 60px;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;    
        }
    }
</style>