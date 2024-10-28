<template>
    <footer class="footer">
        <ul>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
        </ul>
        <h3>World News</h3>
        <div class="notice">    
            <p>이 사이트는 Vue.js를 이용해 학습용으로 제작되었습니다.</p>
            <p>This site was created for educational purposes using Vue.js.</p>
        </div>
        <p>Copyright ⓒ World News All rights reserved.</p>
    </footer>
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
    footer{
        padding: 32px 32px 8px;
        color: #cccccc;
        background-color: #eeeeee;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                font-size: 14px;
                &:not(:last-of-type)::after{
                    content: '|';
                    padding: 0 8px;
                }

            }
        }
        h3{            
            margin: 8px 0;
            text-align: center;
        }
        p{
            font-size: 14px;
            text-align: center;
        }
        .notice{
            margin-bottom: 16px;
        }
    }
</style>