import Vue from 'vue'
import Vuex from 'vuex'

import human from './modules/human'
import staff from './modules/staff'
import oneNew from './modules/oneNew'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    human,
    staff,
    oneNew
  },
  strict: debug
})
