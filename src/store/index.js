import Vue from 'vue'
import Vuex from 'vuex'

import human from './modules/human'
import staff from './modules/staff'
import news from './modules/news'
import photoAlbums from './modules/photoAlbums'
import photoGallery from './modules/photoGallery'
import videoAlbums from './modules/videoAlbums'
import videoGallery from './modules/videoGallery'
import information from './modules/information'
import material from './modules/material'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    human,
    staff,
    news,
    photoAlbums,
    photoGallery,
    videoAlbums,
    videoGallery,
    information,
    material
  },
  strict: debug
})
