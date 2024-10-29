<template>
    <div class="detailWrap">
        <div class="titleWrap">
            <span class="section">경제</span>
            <h2 class="title">'비침습 연속혈당측정기' 개발 기업 아폴론, 중기부 장관상 수상</h2>
            <ul class="infoWrap">
                <li class="info">2024.01.01 00:00 서울경제일보</li>
                <li class="info">김경제 기자</li>
            </ul>
        </div>
        <div class="imgWrap">
            <img src="#" />
        </div>
        <div class="textWrap">
            <p>
                아폴론 관계자는 “이번 수상은 지난달 ‘LG 오픈 이노베이션 페스티벌’ 대상 수상에 이은 또 하나의 쾌거”라며 “아폴론의 성장 가능성을 다시 한 번 입증한 사례”라고 설명했다.
                <br />
                <br />
                아폴론은 미국 매사추세츠공과대학(MIT)과의 공동 연구로 주목받은 스타트업이다.
                <br />
                <br />
                홍아람 아폴론 대표는 “이번 중기부 장관상 수상은 그간의 기술적 성과와 미국 시장 진출을 위한 노력이 외부에서 인정받은 의미 있는 결과”라며 “머지않아 초소형 광학 장치로 인체 내 혈당을 비침습적으로 측정하는 날이 올 것”이라고 말했다.
            </p>
        </div>
        <div class="linkWrap">
            <a href="#">
                <button type="button">전문 보기</button>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .detailWrap{
        margin-top: 32px;
        .titleWrap{
            margin: 32px 0 16px;
            .section{
                margin-bottom: 8px;
                font-size: 14px;
            }
            .title{
                margin-bottom: 12px;
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
            min-height: 210px;
            margin-bottom: 20px;
            border-radius: 20px;
            overflow: hidden;
            img{
                background-color: #42b983;
            }
        }
        .textWrap{
            margin-bottom: 32px;
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