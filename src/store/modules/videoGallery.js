import Axios from 'axios'

const state = {
  video: null,
  relatedVideos: null
}
const actions = {
  getVideo: async ({commit}, payload) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/v-gallery/album/${payload.album}/${payload.video}`)
      if (data) {
        commit('setVideo', data)
      }
    } catch (error) {
      throw error
    }
  },
  getRelatedVideos: async ({commit}, albumId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/v-albums/items/${albumId}`)

      if (data) {
        commit('setRelatedVideos', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setVideo: (state, payload) => {
    state.video = payload
  },
  setRelatedVideos: (state, payload) => {
    state.relatedVideos = payload
  }
}
const getters = {
  video: (state) => {
    return state.video
  },
  relatedVideos: (state) => {
    return state.relatedVideos
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
