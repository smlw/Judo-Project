import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/stylus/main.styl'
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
