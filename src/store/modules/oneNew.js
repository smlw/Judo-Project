import Axios from 'axios'

const state = {
  oneNew: null
}

const actions = {
  loadOneNew: async ({commit}, id) => {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/news/` + id)
      commit('loadOneNew', data)
    }
  }
  const mutations = {
    loadOneNew: (state, payload) => {
      state.oneNew = payload
    }
  }
  const getters = {
    getOneNew: state => {
      return state.oneNew
    }
  }

export default {
  state,
  getters,
  actions,
  mutations
}
