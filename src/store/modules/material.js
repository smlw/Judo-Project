import Axios from 'axios'

const state = {
  materials: null,
  oneMaterial: null
}
const actions = {
  getMaterials: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/materials`)
      
      if (data) {
        commit('setMaterials', data)
      }
    } catch (error) {
      throw error
    }
  },
  getOneMaterial: async ({commit}, materialId) => {
  // getOneMaterial: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/materials/${materialId}`)
      
    //   const data = {
    //     "id": 1,
    //     "title": "Самая научнейшая статья",
    //     "text": "<p>Эта статья тянет минимум на нобелевку<br></p>",
    //     "file": null,
    //     "created": "2019-05-05",
    //     "video": {
    //       "autorId": "1", // id тренера
    //       "comment": "Комментарий",
    //       "videoCover": null, // Обложка видео. 
    //       "videoLink": "video-gallery/1/1" // ссылка на видео (оно должно быть в каком то альбоме, видимо в админке нужно будет сначала добавить видео в альбом, а потом при написании статьи его как то выбрать и прекрипить)
    //     }
    // }

      if (data) {
        commit('setOneMaterial', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setMaterials: (state, payload) => {
    state.materials = payload
  },
  setOneMaterial: (state, payload) => {
    state.oneMaterial = payload
  }
}
const getters = {
  materials: (state) => {
    return state.materials
  },
  oneMaterial: (state) => {
    return state.oneMaterial
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
