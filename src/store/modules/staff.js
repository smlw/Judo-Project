import Axios from 'axios'

const state = {
  staff: null
}
const actions = {
  getStaff: async ({commit}, staffId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/staff/${staffId}`)
      
      if (data) {
        commit('setStaff', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setStaff: (state, payload) => {
    state.staff = payload
  }
}
const getters = {
  staff: (state) => {
    return state.staff
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
