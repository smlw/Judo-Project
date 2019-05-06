import Axios from 'axios'

const state = {
  albumPhotos: null
}
const actions = {
  getAlbumPhotos: async ({commit}, albumId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/p-gallery/album/${albumId}`)
      
      if (data) {
        commit('setAlbumPhotos', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setAlbumPhotos: (state, payload) => {
    state.albumPhotos = payload
  }
}
const getters = {
  albumPhotos: (state) => {
    return state.albumPhotos
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
