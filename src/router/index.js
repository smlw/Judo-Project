import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {title: 'Главная страница'}
    }
  ]
})


export default router
