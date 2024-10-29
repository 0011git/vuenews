<template>
    <div :class="['searchBoxWrap', {'show': isSearchBoxVisible, 'lockScroll': lockScroll }]" @click.self="$emit('showSearchBox')">
      <div class="searchBoxModal">
        <div class="searchBarWrap">
                    
          <div class="closeBtnWrap">
              <button @click="$emit('showSearchBox')"></button>
          </div>

          <div class="inputWrap">
              <input type="text" id="keyword" placeholder="검색어를 입력하세요."/>
              <label for="keyword"></label>
          </div>
        </div>
  
        <ul class="radioWrap">
          <li class="inputWrap">
            <input class="radio" type="radio" id="local" name="world" />
            <label for="local">국내</label>
          </li>
          
          <li class="inputWrap">
            <input class="radio" type="radio" id="global" name="world" />
            <label for="global">해외</label>
          </li>
        </ul>
  
      </div>
    </div>
</template>
<script>
export default {
    props: ["isSearchBoxVisible", "lockScroll"]
    
}
</script>
<style lang="scss">
    .searchBoxWrap{
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: rgba($color: #000000, $alpha: 0.3);
    transform: translateY(-100%);
    position: fixed;
    &.show{
        transform: translateY(0);
    }
    .searchBoxModal{
      width: 100%;
      padding: 14px 20px;
      background-color: #ffffff;
      border-radius: 0 0 20px 20px;
      
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
                padding: 12px 40px 12px 16px;
                font-size: 16px;
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
                &::after{
                    width: 32px;
                    height: 32px;
                    margin-right: 4px;
                    content: '';
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    right: 16px;
                    transform: translate(50%, -50%);
                    background: url('../assets/search.svg') center no-repeat;
                    background-size: contain;
                }
            }
        }
      }
      .radioWrap{
        .inputWrap{
          .radio{
            display: none;
            &::before{
              width: 16px;
              height: 16px;
              display: block;
              background: url('../assets/radio.svg') center no-repeat;
            }
            &:checked{
              &::before{
                &.clicked{
                  background: url('../assets/radio_clicked.svg') center no-repeat;
                }
              }
            }
          }
          label{
            &:not(:last-of-type){
              margin-right: 16px;
            }
          }
        }
      }
    }
  }
</style>