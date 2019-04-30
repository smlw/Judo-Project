import Axios from 'axios'

const state = {
  human: null
}

const actions = {
  loadHuman: async ({commit}, id) => {
    const {data} = await Axios.get('http://192.168.0.100:8000/api/sportcard/human/' + id)
    commit('loadHuman', data)
  }
}
const mutations = {
  loadHuman: (state, payload) => {
    state.human = payload
  }
}
const getters = {
  getHuman: state => {
    return state.human
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
