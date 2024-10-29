<template lang="">
    <div>
        
    </div>
</template>

<script>
const serverUrl = 'http://localhost:4000/news'
const world = 'local';  // local or global


const today = new Date();
const aWeekAgo = today - 7;
console.log(aWeekAgo);
const query = {
    world: world,
    date_from: today,
    date_to: today,
    keyword: formattedKeyword,
}

/** 키워드 형식 바꾸는 함수 */
function keywordFormat(raw) {
    return raw.split(' ').join(' OR ');
}
const formattedKeyword = keywordFormat('인공 지능 특이점')



export default {
    data(){
        return{ }
    },
    created() {
        this.mainApi();
        this.sectionApi();
        this.searchApi();

    },
    methods: {
        async mainApi(){
            const response = await axios.get(serverUrl, {params: query})
            console.log(response.data);
        },
        async sectionApi(){

        },
        async searchApi(){

        }
    }
}
</script>
<style lang="scss">
    
</style>