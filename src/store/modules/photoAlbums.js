import Axios from 'axios'

const state = {
  photoAlbums: null
}
const actions = {
  getPhotoAlbums: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/p-albums/`)
      
      if (data) {
        commit('setPhotoAlbums', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setPhotoAlbums: (state, payload) => {
    state.photoAlbums = payload
  }
}
const getters = {
  photoAlbums: (state) => {
    return state.photoAlbums
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
