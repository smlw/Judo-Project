import Axios from 'axios'

const state = {
  oneInformation: null
  // information: null
}
const actions = {
  getOneInformation: async ({commit}, informationId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/materials/${informationId}`)
      
      if (data) {
        commit('setOneInformation', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setOneInformation: (state, payload) => {
    state.oneInformation = payload
  }
}
const getters = {
  oneInformation: (state) => {
    return state.oneInformation
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
