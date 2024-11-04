<template>
    <figure class="cardWrap" @click="goToDetail">
        <div :class="['imgWrap', {noImg: !news.thumbnail_url}]">
            <img :src="news.thumbnail_url" :alt="news.title" />
        </div>
        <figcaption class="textWrap">
            <h3 class="twoline">{{ news.title }}</h3>
            <span class="twoline">{{ news.published_at.replace('T', ' ').slice(0, -3) }} {{ news.publisher }}</span>
        </figcaption>
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
    .cardWrap{
        min-width: 320px;      

        .imgWrap{
            border-radius: 20px;
            overflow: hidden;
            &.noImg{
                min-height: 240px;
            }
        }
        .textWrap{
            margin: 8px 20px 0;
            h3{
                font-weight: 400;
                margin: 0;
            }
            span{
                margin-top: 4px;
                font-size: 12px;
                color: #cccccc;
            }
        }

    }
</style>