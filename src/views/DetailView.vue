<template>
    <div class="detailWrap">
        <div class="titleWrap">
            <!-- <span class="section">{{ detailItem. }}</span> -->
            <h2 class="title">{{  detailItem.title }}</h2>
            <ul class="infoWrap">
                <li class="info">{{ detailItem.published_at.replace('T', ' ')}} {{ detailItem.publisher }}</li>
                <li class="info" v-if=" detailItem.author !== '' ">{{ detailItem.author }}</li>
            </ul>
        </div>
        <div class="imgWrap">
            <img :src="detailItem.image_url" />
        </div>
        <div class="textWrap">
            <p>
                {{ detailItem.summary }}
            </p>
        </div>
        <div class="linkWrap">
            <a :href="detailItem.content_url">
                <button type="button">전문 보기</button>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        ...mapActions('DetailDataModule', ['detailItem']), // 액션 가져오기
    }
}
</script>
<style lang="scss">
    .detailWrap{
        margin-top: 32px;
        .titleWrap{
            margin: 48px 0 40px;
            .section{
                margin-bottom: 16px;
                display: block;
                font-size: 14px;
            }
            .title{
                margin-bottom: 20px;
                font-size: 24px;
                font-weight: 700;
            }
            .infoWrap{
                .info{
                    font-size: 12px;
                    color: #cccccc;
                }
            }

        }
        .imgWrap{
            min-width: 320px;
            margin-bottom: 40px;
            border-radius: 20px;
            overflow: hidden;
            img{
                background-color: #42b983;
            }
        }
        .textWrap{
            margin-bottom: 60px;
            p{
                font-weight: 400;
                margin: 0;
            }
            span{
                font-size: 12px;
                color: #cccccc;
            }
        }
        .linkWrap{
            width: 100%;
            a{
                button{
                    width: 100%;
                    padding: 12px 24px;
                    text-align: center;
                    cursor: pointer;
                    // background-color: #cccccc;
                    border: 1px solid #cccccc;
                    border-radius: 8px;
                    font-size: 14px;
                    &::after{
                        content: '';
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        vertical-align: middle;
                        background: url('../assets/link.svg') center no-repeat;
                    }
                }
            }
        }
    }
</style>