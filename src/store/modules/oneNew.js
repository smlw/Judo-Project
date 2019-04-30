import Axios from 'axios'

const state = {
  oneNew: null
}

const actions = {
  loadOneNew: async ({commit}, id) => {
      const {data} = await Axios.get('http://192.168.0.100:8000/api/news/' + id)
      commit('loadOneNew', data)
      console.log(process.env.TEST)
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
