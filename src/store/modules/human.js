import Axios from 'axios'

const state = {
  oneHuman: null,
  humans: null,
  humansJunior: null,
  humansStudent: null,
  humansMaster: null,
}
const actions = {
  getHumansJunior: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/human/unosha`)
      
      if (data) {
        // Create initials for each human
        data.forEach(human => {
          const name = human.name.charAt(0)
  
          human.initials = `${name}.`
        })
        commit('setHumansJunior', data)
      }
    } catch (error) {
      throw error
    }
  },
  getHumansStudent : async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/human/student`)
      
      if (data) {
        // Create initials for each human
        data.forEach(human => {
          const name = human.name.charAt(0)
  
          human.initials = `${name}.`
        })
        commit('setHumansStudent', data)
      }
    } catch (error) {
      throw error
    }
  },
  getHumansMaster : async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/human/master`)
      
      if (data) {
        // Create initials for each human
        data.forEach(human => {
          const name = human.name.charAt(0)
  
          human.initials = `${name}.`
        })
        commit('setHumansMaster', data)
      }
    } catch (error) {
      throw error
    }
  },
  getHumans: async ({commit}) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/human/`)
      
      if (data) {
        // Create initials for each human
        data.forEach(human => {
          const name = human.name.charAt(0)
  
          human.initials = `${name}.`
        })
        commit('setHumans', data)
      }
    } catch (error) {
      throw error
    }
  },
  getOneHuman: async ({commit}, humanId) => {
    try {
      const {data} = await Axios.get(`${process.env.VUE_APP_API_URL}/sportcard/human/${humanId}`)
      
      if (data) {
        commit('setOneHuman', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setHumans: (state, payload) => {
    state.humans = payload
  },
  setOneHuman: (state, payload) => {
    state.oneHuman = payload
  },
  setHumansJunior: (state, payload) => {
    state.humansJunior = payload
  },
  setHumansStudent: (state, payload) => {
    state.humansStudent = payload
  },
  setHumansMaster: (state, payload) => {
    state.humansMaster = payload
  }
}
const getters = {
  humans: (state) => {
    return state.humans
  },
  oneHuman: (state) => {
    return state.oneHuman
  },
  humansJunior: (state) => {
    return state.humansJunior
  },
  humansStudent: (state) => {
    return state.humansStudent
  },
  humansMaster: (state) => {
    return state.humansMaster
  },
  fullHallOfFame: (state, getters) => {
    const hall = {
      junior: {
        name: 'Призеры юношеских соревнований',
        link: 'junior',
        humans: getters.humansJunior
      },
      student: {
        name: 'Призеры студенческих соревнований',
        link: 'student',
        humans: getters.humansStudent
      },
      master: {
        name: 'Галерея мастеров',
        link: 'master',
        humans: getters.humansMaster
      }
    }

    return hall
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
