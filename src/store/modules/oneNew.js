import Axios from 'axios'

const state = {
  oneNew: null
}
const actions = {
  getOneNew: async ({commit}, newId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/news/${newId}`)
      
      if (data) {
        commit('setOneNew', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setOneNew: (state, payload) => {
    state.oneNew = payload
  }
}
const getters = {
  oneNew: (state) => {
    return state.oneNew
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
