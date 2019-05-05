import Axios from 'axios'

const state = {
  object: null
}
const actions = {
  get: async ({commit}, payload) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/`, payload)
      
      if (data) {
        commit('', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  set: (state, payload) => {
    state.object = payload
  }
}
const getters = {
  object: (state) => {
    return state.object
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
