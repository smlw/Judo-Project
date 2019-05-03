import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import PageComponents from './plugins/'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// Photo viewer
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)

// Video viewer
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
Vue.use(VuePlyr)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(PageComponents)
Vue.use(swiper, swiperSlide)

sync(store, router)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
