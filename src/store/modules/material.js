import Axios from 'axios'

const state = {
  materials: null
}
const actions = {
  getMaterials: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/materials`)
      
      if (data) {
        commit('setMaterials', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setMaterials: (state, payload) => {
    state.materials = payload
  }
}
const getters = {
  materials: (state) => {
    return state.materials
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
