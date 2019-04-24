import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import Album from '../components/pages/Album.vue'
import VideoAlbum from '../components/pages/VideoAlbum.vue'
import OneNew from '../components/pages/OneNew.vue'
import Trainer from '../components/pages/Trainer.vue'

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
    },
    {
      path: '/new/:id',
      component: OneNew,
      meta: {title: 'Новость'}
    },
    {
      path: '/staff/:id',
      component: Trainer,
      meta: {title: 'Тренер'}
    }
  ]
})


export default router
