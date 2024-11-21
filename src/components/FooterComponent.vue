<template>
    <footer class="footer">
        <div class="footerWrap">
            <ul>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
            </ul>
            <h3>World News</h3>
            <div class="notice">
                <p>이 사이트는 Vue.js를 이용해 학습용으로 제작되었습니다. This site was created for educational purposes using Vue.js.</p>
            </div>
            <p class="copyright">Copyright ⓒ World News All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
    footer{
        padding: 32px 32px 8px;
        background-color: #eeeeee;
        .footerWrap{
            max-width: 768px;
            margin: 0 auto;
            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                li{
                    color: #cccccc;
                    font-size: 14px;
                    &:not(:last-of-type)::after{
                        content: '|';
                        padding: 0 8px;
                    }
    
                }
            }
            h3{            
                margin: 8px 0;
                color: #cccccc;
                text-align: center;
            }
            p{
                color: #cccccc;
                font-size: 12px;
                text-align: center;
            }
            .notice{
                margin-bottom: 8px;
            }
            .copyright{
                margin: 8px 0;
            }
        }
    }
</style>