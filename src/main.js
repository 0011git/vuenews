import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vue from 'vue'
// import Vuex from 'vuex'
// import VueRouter from 'vue-router'
// import cmmnPlugin from './common/cmmnPlugin.js'
// import common from '@/common/common'


// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// Vue.use(VueRouter)
// Vue.use(common);
const app = createApp(App);
app.use(store)
// app.use(cmmnPlugin, {data: {}})
createApp(App).use(store).use(router).mount('#app')
