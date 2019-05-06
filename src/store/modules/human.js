import Axios from 'axios'

const state = {
  oneHuman: null,
  humans: null
}
const actions = {
  getHumans: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/human/`)
      
      if (data) {
        // Create initials for each human
        data.forEach(human => {
          const name = human.name.charAt(0)
  
          human.initials = `${name}.`
        })
        commit('setHumans', data)
      }
    } catch (error) {
      throw error
    }
  },
  getOneHuman: async ({commit}, humanId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/human/${humanId}`)
      
      if (data) {
        commit('setOneHuman', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setHumans: (state, payload) => {
    state.humans = payload
  },
  setOneHuman: (state, payload) => {
    state.oneHuman = payload
  }
}
const getters = {
  humans: (state) => {
    return state.humans
  },
  oneHuman: (state) => {
    return state.oneHuman
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
