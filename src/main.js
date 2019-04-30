import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import PageComponents from './plugins/'
import './assets/bootstrap-grid.css'

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
Vue.use(VuePlyr)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(PageComponents)

sync(store, router)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
