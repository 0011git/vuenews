import { mainApi } from '@/api/apifunc';
import { createStore } from 'vuex'


// 로컬/글로벌 전역 상태 관리
const localOrGlobalModule = {
  namespaced: true,
  state: {
    world: 'global'
  },
  mutations: {
    setWorld(state, isLocal) {
      if(isLocal === true) {
        state.world = 'local';
      }else {
        state.world = 'global'
      }
    }
  },
  actions: {
    isLocal({ commit }, isLocal) {
      commit('setWorld', isLocal);
    }
  }
}

//메인 모듈
const mainDataModule = {
  namespaced: true,
  state: {  //공통으로 사용할 변수 정의, 프로젝트 내의 모든 곳에서 사용 가능
    mainItems:[]
  },
  getters: {  //여러 개의 컴포넌트에서 동일한 computed를 사용할 경우 이곳에 정의해 공통으로 사용 가능.
    getMainItems(state){
      return state.mainItems
    }
  },
  mutations: {  //state변경시키기, 동기처리, commit('함수명','전달인자')로 실행
   setMainItems(state, mainData){
    state.mainItems = mainData;
   }
  },
  actions: {  //mutation실행시키기, 비동기처리가 필요한 로직 수행, dispatch('함수명', '전달인자', {root:true})로 실행, 함수형태로 작성??
    async fetchMainData({commit}){
      const mainData = await mainApi(this.world);
      commit('setMainItems', mainData)
    }
  }
}

//디테일 모듈
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
    setDetailItem(state, detailData) {
      state.detailItem = detailData;
      console.log(detailData);
    },
    clearDetailItem(state) {
      state.detailItem = {};
    }
  },
  actions: {
    saveDetailData({commit}, detailData){
      commit('setDetailItem', detailData) 
    },
    clearDetailData({ commit }) {   //외부호출용
      commit('clearDetailItem');
    }
  }
}

//검색 모듈
const searchDataModule = {
  namespaced: true,
  state: {
    searchItems: []
  },
  getters:{
    getSearchItems(state) {
      return state.searchItems;
    }
  },
  mutations: {
    setSearchItems(state, searchData) {
      state.searchItems = searchData;
      console.log(searchData);
    },
    clearSearchItems(state) {
      state.searchItems = [];
    }
  },
  actions: {
    saveSearchData({commit}, searchData){
      commit('setSearchItems', searchData)    
    },
    clearSearchData({ commit }) {   //외부 호출용
      commit('clearSearchItems');
    }
  }  
}


export default createStore({

  modules: {  //스토어의 모듈화, 여러 개로 분리시키는 곳
    localOrGlobalModule: localOrGlobalModule,
    mainDataModule: mainDataModule,
    detailData: detailDataModule,
    searchData: searchDataModule
  }
})