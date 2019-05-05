import Vue from 'vue'
import Vuex from 'vuex'

import human from './modules/human'
import staff from './modules/staff'
import oneNew from './modules/oneNew'
import photoAlbums from './modules/photoAlbums'
import photoGallery from './modules/photoGallery'
import videoAlbums from './modules/videoAlbums'
import videoGallery from './modules/videoGallery'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    human,
    staff,
    oneNew,
    photoAlbums,
    photoGallery,
    videoAlbums,
    videoGallery
  },
  strict: debug
})
