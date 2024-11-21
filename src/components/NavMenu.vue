<template>
    <nav :class="{'show':isNavVisible, 'lockScroll': lockScroll}" @click.self="$emit('showNav')">
        <div class="navMenuWrap">
            <div class="margin020">
                <div class="searchBarWrap">        
                    <div class="closeBtnWrap">
                        <button @click="$emit('showNav')"></button>
                    </div>
                    <!-- 검색 기능 자체를 공통 함수로 뽑아서 사용할까?-->
                        <div class="inputWrap">
                            <label for="keyword">
                            <input type="text" id="keyword" placeholder="검색어를 입력하세요."/>
                            </label>
                        </div>
                    

                </div>
                <LocalGlobalTab />
            </div>
            <ul class="sectionWrap">
                <li><a href="/section?idx=0">정치</a></li>
                <li><a href="/section?idx=1">경제</a></li>
                <li><a href="/section?idx=2">사회</a></li>
                <li><a href="/section?idx=3">문화</a></li>
                <li><a href="/section?idx=4">세계</a></li>
                <li><a href="/section?idx=5">기술</a></li>
                <li><a href="/section?idx=6">연예</a></li>
                <li><a href="/section?idx=7">오피니언</a></li>
            </ul>
            <a href="/">
                <span class="deco"></span>
            </a>
        </div>
    </nav>
</template>

<script>
import LocalGlobalTab from '@/components/LocalGlobalTab.vue'

export default {
    props: ["isNavVisible", "lockScroll"],
    components: {
        LocalGlobalTab
    }
}
</script>

<style lang="scss">
    nav{
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.3);
        position: fixed;
        // top: 0;
        // left: 0;
        z-index: 100;
        transform: translateY(-100%);
        &.show{
            transform: translateY(0);
        }
        .navMenuWrap{
            width: 30%;
            min-width: 280px;
            height: 100vh;     
            padding-top: 16px;   
            background-color: #ffffff;
            position: relative;
            overflow: hidden;
            .margin020{
                margin: 0 20px;
                .searchBarWrap{
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .closeBtnWrap{
                        button{
                            margin-right: 8px;
                            position: relative;
                            cursor: pointer;
                            &::after{
                                width: 32px;
                                height: 32px;
                                display: block;
                                content: '';
                                background: url('../assets/close.svg') center no-repeat;
                                background-size: contain;
                            }
                        }
                    }
                    .inputWrap{
                        width: 100%;
                        input{
                            width: 100%;
                            height: 100%;
                            min-width: 200px;
                            min-height: 32px;
                            padding: 8px 40px 8px 16px;
                            background-color: #eeeeee !important;
                            color: #cccccc !important;
                            border: none;
                            border-radius: 8px;
                            &:focus{
                                background-color: #ffffff !important;
                                border: 1px solid #1f1f1f !important;
                                color: #1f1f1f !important;
                            }
                        }
                        label{
                            position: relative;
                            cursor: pointer;
                            &::after{
                                width: 32px;
                                height: 32px;
                                margin-right: 4px;
                                content: '';
                                cursor: pointer;
                                position: absolute;
                                top: 50%;
                                right: 16px;
                                // left: -5%;
                                transform: translate(50%, -50%);
                                background: url('../assets/search.svg') center no-repeat;
                                background-size: contain;
                            }
                        }

                    }
                }
            }
            

            .sectionWrap{
                margin: 0 20px;
                li{
                    padding: 16px 16px;
                    text-align: center;
                    cursor: pointer;
                    border-bottom: 1px dotted #cccccc;
                    &:last-of-type{
                        border-bottom: 1px solid #cccccc;
                    }
                }
            }
            .deco{
                bottom: 32px;
                left: 20px;
                position: absolute;
                &::after{
                    width: 128px;
                    height: 40px;
                    display: block;
                    content: '';
                    background: url('../assets/logodeco.svg') center no-repeat;
                    background-size: cover;
                }
            }

        }
    }
</style>