<template>
    <figure class="strapWrap" > <!--@click="goToDetail"-->
        <figcaption class="textWrap">
            <h3 class="twoline">{{ news.title }}</h3>   <!--twoline:App.vue에서 관리-->
            <span class="twoline">{{ news.published_at.replace('T', ' ').slice(0, -3) }} {{ news.publisher }}</span>
        </figcaption>
        <div :class="['imgWrap', {noImg: !news.thumbnail_url}]">
            <img :src="news.thumbnail_url" :alt="news.title" />
        </div>
    </figure>
</template>

<script>
import { goToDetailMixin } from '@/mixins/goToDetail';

export default {
    props : {
        news : {
            type: Object,
            required: true
        }
    },
    mixins: [goToDetailMixin]
    
}
</script>
<style lang="scss">
    .strapWrap{
        min-width: 320px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // gap: 16px;
        cursor: pointer;
        .textWrap{
            margin-right: 8px;
            flex: 1;
            h3{
                margin-bottom: 4px;
                font-size: 16px;
                font-weight: 400;
            }
            span{
                font-size: 12px;
                color: #cccccc;
            }
        }
        .imgWrap{
            width: 80px;
            height: 80px;
            border-radius: 8px;
            overflow: hidden;
            img{
                object-fit: cover;
            }
        }
    }
</style>