// import { mainApi } from '@/api/apifunc';
import { createStore } from 'vuex'


// 국내local/해외global 전역 상태 관리
const localOrGlobalModule = {
  namespaced: true,
  state: {
    world: 'local'
  },
  mutations: {
    setWorld(state, world) {
        state.world = world;
    }
  },
  actions: {
    chooseWorld({ commit }, world) {
      commit('setWorld', world);
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
    searchData: searchDataModule
  }
})