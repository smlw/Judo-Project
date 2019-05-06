import Axios from 'axios'

const state = {
  videoAlbums: null,
  videoAlbum: null
}
const actions = {
  getVideoAlbums: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/v-albums/`)
      
      if (data) {
        commit('setVideoAlbums', data)
      }
    } catch (error) {
      throw error
    }
  },
  getVideoAlbum: async ({commit},albumId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/v-albums/${albumId}`)
      
      if (data) {
        commit('setVideoAlbum', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setVideoAlbums: (state, payload) => {
    state.videoAlbums = payload
  },
  setVideoAlbum: (state, payload) => {
    state.videoAlbum = payload
  }
}
const getters = {
  videoAlbums: (state) => {
    return state.videoAlbums
  },
  videoAlbum: (state) => {
    return state.videoAlbum
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
