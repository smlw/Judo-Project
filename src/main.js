import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import PageComponents from './plugins/'
import './assets/stylus/main.styl'

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(PageComponents)
Vue.use(Viewer)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
