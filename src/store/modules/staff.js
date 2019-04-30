import Axios from 'axios'

const state = {
  staff: null
}

const actions = {
  loadStaff: async ({commit}, id) => {
    const {data} = await Axios.get('http://192.168.0.100:8000/api/sportcard/staff/' + id)
    commit('loadStaff', data)
  }
}
const mutations = {
  loadStaff: (state, payload) => {
    state.staff = payload
  }
}
const getters = {
  getStaff: state => {
    return state.staff
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
