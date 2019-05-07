import Axios from 'axios'

const state = {
  oneNew: null,
  allNews: null,
  news: null,
  events: null
}
const actions = {
  getOneNew: async ({commit}, newId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/news/${newId}`)
      
      if (data) {
        commit('setOneNew', data)
      }
    } catch (error) {
      throw error
    }
  },
  getNews: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/news/`)
      
      if (data) {
        commit('setNews', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setOneNew: (state, payload) => {
    state.oneNew = payload
  },
  setNews: (state, payload) => {
    state.allNews = payload
  }
}
const getters = {
  oneNew: (state) => {
    return state.oneNew
  },
  allNews: (state) => {
    return state.allNews
  },
  news: (state, getters) => {
    if (getters.allNews) {
      return getters.allNews.filter(n => {
        return n.news_type === 'Новость'
      })
    }
  },
  events: (state, getters) => {
    if (getters.allNews) {
      return getters.allNews.filter(events => {
        return events.news_type === 'Грядущее событие'
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
