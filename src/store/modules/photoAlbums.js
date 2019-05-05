// import Axios from 'axios'

const state = {
  photoAlbums: null
}
const actions = {
  getPhotoAlbums: async ({commit}) => {
    try {
      // const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/p-albums/`)
      
      const data = [
        {
          "id": 1,
          "title": "День варенья",
          "cover": "/media/Main/Photos/rage.jpg",
          "created": "2019-04-26",
        },
        {
          "id": 2,
          "title": "Первенство Свердловской области 21.02.2019 город Екатеринбург.",
          "cover": "/media/Main/Photos/rage.jpg",
          "created": "2019-04-26"
        },
        {
          "id": 3,
          "title": "Дзюдо: турнир памяти Н.С. Мусатова",
          "cover": "/media/Main/Photos/rage.jpg",
          "created": "2019-04-26"
        },
        {
          "id": 4,
          "title": "'Зажги синим!' 2 апреля",
          "cover": "/media/Main/Photos/rage.jpg",
          "created": "27-04-2019"
        },
        {
          "id": 5,
          "title": "Выборы Путина",
          "cover": "/media/Main/Photos/rage.jpg",
          "created": "27-04-2019"
        },
      ]

      if (data) {
        // console.log(data)
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
