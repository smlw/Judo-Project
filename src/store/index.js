import Vue from 'vue'
import Vuex from 'vuex'

import human from './modules/human'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    human
  },
  strict: debug
})
