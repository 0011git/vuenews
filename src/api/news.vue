<template lang="">
    <div>
        
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data(){
        return{ }
    },
    // created() {
    //     this.mainApi();
    //     this.sectionApi();
    //     this.searchApi();

    // },
    methods: {
        async mainApi(world){
            const response = await axios.get(`http://localhost:4000/news?world=${world}&page=main`)
            return response.data;
        },
        async sectionApi(world, section){
            const response = await axios.get(`http://localhost:4000/news?world=${world}&page=section&section=${section}`)
            return response.data;
        },
        async searchApi(world, keyword){
            const response = await axios.get(`http://localhost:4000/news?world=${world}&page=search&keyword=${keyword}`)
            return response.data;
        }
    }
}
</script>
<style lang="scss">
    
</style>