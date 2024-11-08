<template>
  <form @submit.prevent="submitForm">
    <div :class="['searchBoxWrap', {'show': isSearchBoxVisible, 'lockScroll': lockScroll }]" @click.self="$emit('showSearchBox')">
      <div class="searchBoxModal">
        <div class="searchBarWrap">
                    
          <div class="closeBtnWrap">
              <button @click="$emit('showSearchBox')"></button>
          </div>

          <div class="keywordWrap">
              <input ref="keywordInput" type="text" v-model="keyword" @input="setKeyword(keyword)" id="keyword" placeholder="검색어를 입력하세요." />
              <label for="keyword"></label>
              <button class="searchBtn" type="submit"></button>
          </div>
        </div>
  
        <ul class="radioGroup">
          <li class="radioWrap">
            <label for="local worldLabel"  @click="setWorld('local')">
              <span :class="['radioCustom', {'clicked':world === 'local'}]"></span>
              <input class="radio" type="radio" id="local" name="world" value="local" v-model="world" defaultchecked />
              국내
            </label>
          </li>
          
          <li class="radioWrap">
            <label for="global worldLabel" @click="setWorld('global')">
              <span :class="['radioCustom', {'clicked':world === 'global'}]"></span>
              <input class="radioInput" type="radio" id="global" name="world" value="global" v-model="world" />
              해외
            </label>
          </li>
        </ul>
  
      </div>
    </div>
  </form>
</template>


<script>
export default {
    props: [
      "isSearchBoxVisible", 
      "lockScroll"
    ],
    data() {
      return { 
        keyword: '',  // 검색어
        world:'local' 
      }
    },
    methods : {
      setWorld(world){
        this.world = world
      },
      setKeyword(word) {
        this.keyword = word
      },
      submitForm() {
      // 검색어와 world 데이터를 쿼리 파라미터로 URL에 추가
      const queryParams = new URLSearchParams();
      if (this.keyword !== '') {
        queryParams.append('keyword', this.keyword);
        queryParams.append('world', this.world);
        window.location.href = `/search?${queryParams.toString()}`;
      } else {
        this.$refs.keywordInput.focus();
        
      }

      // 페이지 이동 (Vue Router를 사용하는 경우)
      // this.$router.push({ path: '/search', query: queryParams.toString() });
      
      // 만약 페이지를 새로고침하면서 이동하려면 아래처럼 할 수 있습니다.
      // window.location.href = `/search?${queryParams.toString()}`;
    }
    }
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
        .keywordWrap{
            width: 100%;
            height: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >input{
              width: 100%;
              height: 100%;
              padding: 0 8px;
              background-color: #eeeeee;
              border-radius: 8px;
              &:focus{
                background-color: #ffffff;
                border: 1px solid #41B883;
              }
            } 
            .searchBtn{
              &::after{
                width: 24px;
                height: 24px;
                margin-left: 8px;
                display: block;
                content: '';
                cursor: pointer;
                background: url('../assets/search.svg') center no-repeat;
              }
            }        
        }
      }

      .radioGroup{
        display: flex;
        .radioWrap{
          &:not(:last-of-type){
            margin-right: 16px;
          }
          .worldLabel{
            display: flex;
            align-items: center;
            .radioCustom{
                &::after{
                  width: 16px;
                  height: 16px;
                  content: '';
                  display: block;
                  background: url('../assets/radio.svg') center no-repeat;
                }
                &.clicked::after{
                  background: url('../assets/radio_clicked.svg') center no-repeat;
                }
            }
            .radioInput{
              display: none;
            }
          }
        }
      }
    }
  }
</style>