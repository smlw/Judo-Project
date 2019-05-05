// import Axios from 'axios'

const state = {
  albumPhotos: null
}
const actions = {
  // getAlbumPhotos: async ({commit}, payload) => {
  getAlbumPhotos: async ({commit}) => {
    try {
      // const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/p-gallery/album/`, payload)
      
      const data = {
        "id": 1,
        "title": "День варенья",
        "created": "2019-04-25",
        "photos": [
          {
              "id": 1,
              "photo": "https://picsum.photos/1200/720?image=200",
              "photo_small": "https://picsum.photos/200/200?image=200",
              "descriptions": ""
          },
          {
              "id": 2,
              "photo": "https://picsum.photos/1200/720?image=201",
              "photo_small": "https://picsum.photos/200/200?image=201",
              "descriptions": ""
          },
          {
              "id": 3,
              "photo": "https://picsum.photos/1200/720?image=202",
              "photo_small": "https://picsum.photos/200/200?image=202",
              "descriptions": ""
          }  
        ]
      }

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
