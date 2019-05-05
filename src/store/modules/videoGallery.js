// import Axios from 'axios'

const state = {
  video: null,
  relatedVideos: null
}
const actions = {
  // getVideo: async ({commit}, payload) => {
  getVideo: async ({commit}) => {
    try {
      // const {video} = await Axios.get(`${process.env.VUE_APP_API_URL}/album/`, payload)
      
      const video = {
        "id": 1,
        "title": "Порно",
        "created": "26-04-2019",
        "video": {
          "id": 3,
          "title": "asdasdas",
          "video": null,
          "descriptions": "asdasdasd"
        }
      }

      if (video) {
        commit('setVideo', video)
      }
    } catch (error) {
      throw error
    }
  },
  // getRelatedVideos: async ({commit}, payload) => {
  getRelatedVideos: async ({commit}) => {
    try {
      // const {relatedVideos} = await Axios.post(`${process.env.VUE_APP_API_URL}/v-albums/items/`, payload)
      
      const relatedVideos = {
        "id": 1,
        "videos": [
          {
            "id": 1,
            "title": "asdasdas",
            "cover": null, // ссылка на картинку (обложку). Ссылку на самое видео (mp4) не нужно
          },
          {
            "id": 2,
            "title": "asdasdas2",
            "cover": null,  // ссылка на картинку (обложку). Ссылку на самое видео (mp4) не нужно
          }
        ]
      }

      if (relatedVideos) {
        commit('setRelatedVideos', relatedVideos)
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
