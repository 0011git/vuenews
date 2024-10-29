<template>
    <nav :class="{'show':isNavVisible, 'lockScroll': lockScroll}" @click.self="$emit('showNav')">
        <div class="navMenuWrap">
            <div class="margin020">
                <div class="searchBarWrap">        
                    <div class="closeBtnWrap">
                        <button @click="$emit('showNav')"></button>
                    </div>
                    <div class="inputWrap">
                        <input type="text" id="keyword" placeholder="검색어를 입력하세요."/>
                        <label for="keyword"></label>
                    </div>
                </div>
                <LocalGlobalTab />
            </div>
            <ul class="sectionWrap">
                <a href="/section"><li>정치</li></a>
                <a href="/section"><li>경제</li></a>
                <a href="/section"><li>사회</li></a>
                <a href="/section"><li>문화</li></a>
                <a href="/section"><li>세계</li></a>
                <a href="/section"><li>기술</li></a>
                <a href="/section"><li>연예</li></a>
                <a href="/section"><li>오피니언</li></a>
            </ul>
            <span class="deco"></span>
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
        transform: translateX(-100%);
        &.show{
            transform: translateX(0);
        }
        .navMenuWrap{
            width: 70%;
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
                            background-color: #eeeeee;
                            color: #cccccc;
                            border: none;
                            border-radius: 8px;
                            &:focus{
                                background-color: #ffffff;
                                border: 1px solid #1f1f1f;
                                color: #1f1f1f;
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