import Axios from 'axios'

const state = {
  oneStaff: null,
  staff: null
}
const actions = {
  getOneStaff: async ({commit}, staffId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/staff/${staffId}`)
      
      
      if (data) {
        // Create initials for each human
        const name = data.name.charAt(0)
        const patronymic = data.patronymic.charAt(0)
        data.initials = `${name}. ${patronymic}.`

        commit('setOneStaff', data)
      }
    } catch (error) {
      throw error
    }
  },
  getStaff: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/staff`)
      
      if (data) {
        // Create initials for each human
        data.forEach(staff => {
          const name = staff.name.charAt(0)
          const patronymic = staff.patronymic.charAt(0)

          staff.initials = `${name}. ${patronymic}.`
        })
          
        commit('setStaff', data)
          
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setOneStaff: (state, payload) => {
    state.oneStaff = payload
  },
  setStaff: (state, payload) => {
    state.staff = payload
  }
}
const getters = {
  oneStaff: (state) => {
    return state.oneStaff
  },
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
