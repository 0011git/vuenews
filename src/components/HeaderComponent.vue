<template>
    <header :class="{show:isHeaderVisible}" >
        <div class="headerWrap" >
            <div class="burger" @click="$emit('showNav')"></div>
            <router-link to="/"><h1 class="logo24"></h1></router-link>
            <div class="search" @click="$emit('showSearchBox')"></div>
        </div>
  </header>
</template>


<script>
export default {
    name: "HeaderComponent",
    props: ["isHeaderVisible"],
    components: {
    }
}
</script>


<style lang="scss">
    header{
        width: 100%;
        
        height: 60px;
        padding: 0 20px;
        position: fixed;
        background-color: #ffffff;
        z-index: 99;
        transition: 0.3s;
        transform: translateY(-100%);
        &.show{
            transform: translateY(0%);
        }
        .headerWrap{
            width: 100%;
            max-width: 768px;
            height: 60px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;    
            .burger{  
                width: 32px;
                height: 32px;
                background: url("../assets/burger.svg") center no-repeat;
                cursor: pointer;
            }
            .search{
                width: 32px;
                height: 32px;
                margin-right: 4px;
                background: url("../assets/search.svg") center no-repeat;
                cursor: pointer;
            }
        }
    }
</style>