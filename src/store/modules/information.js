import Axios from 'axios'

const state = {
  oneInformation: null,
  information: null
}
const actions = {
  getOneInformation: async ({commit}, informationId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/info/${informationId}`)
      
      if (data) {
        commit('setOneInformation', data)
      }
    } catch (error) {
      throw error
    }
  },
  getInformation: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/info`)
      
      if (data) {
        commit('setInformation', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setOneInformation: (state, payload) => {
    state.oneInformation = payload
  },
  setInformation: (state, payload) => {
    state.information = payload
  }
}
const getters = {
  oneInformation: (state) => {
    return state.oneInformation
  },
  information: (state) => {
    return state.information
  },
  informationParents: (state, getters) => {
    if (getters.information) {
      return getters.information.filter(info => {
        return info.type === 'Для родителей'
      })
    }
  },
  informationChildren: (state, getters) => {
    if (getters.information) {
      return getters.information.filter(info => {
        return info.type === 'Для детей'
      })
    }
  },
  informationOther: (state, getters) => {
    if (getters.information) {
      return getters.information.filter(info => {
        return info.type === 'Другое'
      })
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
