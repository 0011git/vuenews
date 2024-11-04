import { mainApi } from '@/api/apifunc';
import { createStore } from 'vuex'


// 로컬/글로벌 전역 상태 관리
const localOrGlobalModule = {
  namespaced: true,
  state: {
    isLocal: 0   //0:local, 1:global
  },
  mutations: {
    setLocal(state, isLocal) {
      state.global = !isLocal; // true가 들어오면 global은 false
    }
  },
  actions: {
    localGlobal({ commit }, isLocal) {
      commit('setLocal', isLocal);
    }
  }
}


//메인 데이터 저장 모듈
const mainDataModule = {
  namespaced: true,
  state: {  //공통으로 사용할 변수 정의, 프로젝트 내의 모든 곳에서 사용 가능
    mainItems:[]
  },
  getters: {  //여러 개의 컴포넌트에서 동일한 computed를 사용할 경우 이곳에 정의해 공통으로 사용 가능.
    getItems(state){
      return state.mainItems
    }
  },
  mutations: {  //state변경시키기, 동기처리, commit('함수명','전달인자')로 실행
   setMainItems(state, i){
    state.mainItems = i;
    console.log(i);
   }
  },
  actions: {  //mutation실행시키기, 비동기처리, dispatch('함수명', '전달인자', {root:true})로 실행, 함수형태로 작성??
    async fetchMainData({commit}){
      const mainData = await mainApi();
      commit('setMainItems', mainData)
    }
  }
}

//디테일 데이터 저장 모듈
const detailDataModule = {
  namespaced: true,
  state: {
    detailItem: {}
  },
  getters:{
    getDetailItem(state) {
      return state.detailItem;
    }
  },
  mutations: {
    setDetailItems(state, detailData) {
      state.detailItem = detailData;
      console.log(detailData);
    }
  },
  actions: {
    saveDetailData({commit}, detailData){
      commit('setDetailItems', detailData) 
      
    }
  }
}


//검색 결과 데이터 저장 모듈
const searchDataModule = {
  namespaced: true,
  state: {
    detailItem: {}
  },
  getters:{
    getDetailItem(state) {
      return state.detailItem;
    }
  },
  mutations: {
    setDetailItems(state, detailData) {
      state.detailItem = detailData;
      console.log(detailData);
    }
  },
  actions: {
    saveDetailData({commit}, detailData){
      commit('setDetailItems', detailData) 
      
    }
  }
}


export default createStore({

  modules: {  //스토어의 모듈화, 여러 개로 분리시키는 곳
    localOrGlobal: localOrGlobalModule,
    mainData: mainDataModule,
    detailData: detailDataModule,
    searchData: searchDataModule
  }
})



