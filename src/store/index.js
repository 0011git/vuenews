import { mainApi } from '@/api/apifunc';
import { createStore } from 'vuex'

const mainDataModule = {
  namespaced: true,
  state: {  //공통으로 사용할 변수 정의, 프로젝트 내의 모든 곳에서 사용 가능
    items:[100]
  },
  getters: {  //여러 개의 컴포넌트에서 동일한 computed를 사용할 경우 이곳에 정의해 공통으로 사용 가능.
  },
  mutations: {  //state변경시키기, 동기처리, commit('함수명','전달인자')로 실행
   aaa(state,d){
    state.items = d;
   }
  },
  actions: {  //mutation실행시키기, 비동기처리, dispatch('함수명', '전달인자', {root:true})로 실행, 함수형태로 작성??
    async main({commit}){
      const a = await mainApi();
      commit('aaa',a.data)
    }
  }
}

export default createStore({

  modules: {  //스토어의 모듈화, 여러 개로 분리시키는 곳
    mainData: mainDataModule
  }
})



