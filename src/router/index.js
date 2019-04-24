import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import Album from '../components/pages/Album.vue'
import VideoAlbum from '../components/pages/VideoAlbum.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {title: 'Главная страница'}
    },
    {
      path: '/album',
      component: Album,
      meta: {title: 'Альбомы'}
    },
    {
      path: '/videoalbum',
      component: VideoAlbum,
      meta: {title: 'Видеоальбомы'}
    }
  ]
})


export default router
