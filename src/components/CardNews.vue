<template>
    <figure class="cardWrap" @click="goToDetailMixin">
        <div :class="['imgWrap', {noImg: !news.image_url}]">
            <img :src="news.image_url" :alt="news.title" />
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
        cursor: pointer;
        &:hover{
            .imgWrap{
                > img{
                    &::after{
                        background-color: rgba($color: #000000, $alpha: 0.3);
                    }
                }
            }
        }
        .imgWrap{
            border-radius: 20px;
            overflow: hidden;
            &.noImg{
                min-height: 240px;
            }
            >img {
                display: block;
                position: relative;
                transition: 0.3s;
                &::after{
                    width: inherit;
                    height: inherit;
                    content: '';
                    display: block;
                    top: 0;
                    left: 0;
                    z-index: 100;
                    position: absolute;
                    background-color: rgba($color: #000000, $alpha: 0);
                }
            }
        }
        .textWrap{
            margin: 8px 20px 0;
            h3{
                font-size: 18px;
                font-weight: 400;
                margin: 0;
            }
            span{
                font-size: 14px;
                color: #cccccc;
            }
        }
    }
</style>