// import Axios from 'axios'

const state = {
  videoAlbums: null
}
const actions = {
  getVideoAlbums: async ({commit}) => {
    try {
      // const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/`, payload)
      
      const data = [
        {
          "id": 1,
          "title": "Порно",
          "created": "2019-04-26"
        },
        {
          "id": 2,
          "title": "Порно1",
          "created": "2019-04-26"
        },
        {
          "id": 3,
          "title": "Порно2",
          "created": "2019-04-26"
        },
        {
          "id": 4,
          "title": "Порно3",
          "created": "2019-04-26"
        },
        {
          "id": 5,
          "title": "Порно4",
          "created": "2019-04-26"
        },
      ]

      if (data) {
        commit('setVideoAlbums', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setVideoAlbums: (state, payload) => {
    state.videoAlbums = payload
  }
}
const getters = {
  videoAlbums: (state) => {
    return state.videoAlbums
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
