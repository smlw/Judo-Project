import Axios from 'axios'

const state = {
  human: null
}
const actions = {
  getHuman: async ({commit}, payload) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/human/`, payload)
      
      if (data) {
        commit('setHuman', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setHuman: (state, payload) => {
    state.human = payload
  }
}
const getters = {
  human: (state) => {
    return state.human
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
