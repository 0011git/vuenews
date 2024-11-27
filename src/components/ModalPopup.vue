<template>
    <div class="modal">
        <div class="modalContents">
            <h2>안내사항</h2>
            <button @click="setClose()" :class="{'closeModalBtn':true, 'close':this.close == true}"></button>
            <div class="infoWrap">
                <p>World News는 학습용으로 제작되었으며, <strong>월 API 이용량 초과 시 실시간 뉴스를 제공하지 않고</strong> 사전에 저장한 데이터를 출력합니다.</p>
                <p>이용에 참고 바랍니다. 감사합니다.</p>
            </div>
            <div class="noTodayWrap">
                <input type="checkbox" id="noTodayCheckbox" v-model="isChecked" />
                <label for="noTodayCheckbox">
                    오늘 하루 보지 않기
                </label>
            </div>
        </div>     
    </div>
</template>

<script>
export default {
    data(){
        return{
            noToday: false,
            close: false,
            isChecked: false,

        }
    },
    watch:{

    },
    method:{
        setNoToday(){
            this.noToday = true
        },
        setClose(){
            this.close = true;
        },
        setIsChecked(){
            this.isChecked = true;
        }

    }
}
</script>

<style lang="scss">
.modal{
    max-width: 320px;
    min-height: 300px;
    position: fixed;
    top: 8%;
    left: 4%;
    border:1px solid #cccccc;
    background-color: #ffffff;
    border-radius: 8px;
    z-index: 1;
    // display: none;
    &.close{
        display: none;
    }
    .modalContents{
        padding: 64px 20px 20px;
        position: relative;

        h2{
            font-size: 20px;
        }
        .closeModalBtn{
            position: absolute;
            top: 20px;
            right: 10px;
            &::after{
                width: 32px;
                height: 32px;
                content: '';
                display: block;
                background: url('../assets/close.svg') center no-repeat;
                cursor: pointer;
            }            
        }
        .infoWrap{
            padding: 32px 0 20px;
        }
        .noTodayWrap{
            margin-bottom: 8px;
            >label{
                cursor: pointer;
                font-size: 14px;
            }
        }
    }
}
</style>