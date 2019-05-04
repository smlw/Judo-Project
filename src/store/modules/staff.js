// import Axios from 'axios'

const state = {
  staff: null
}
const actions = {
  // loadStaff: async ({commit}, payload) => {
  getStaff: async ({commit}) => {
    try {
      // const {data} = await Axios.post(`${process.env.VUE_APP_API_URL}/sportcard/staff/`, payload)
      
      const data =  {
        "id": 2,
        "name": "Гандон",
        "family": "Васильев",
        "patronymic": "Гандонович",
        "photo": "/media/Main/Photos/rage.jpg",
        "info": [
          {"name": "Уровень образования, квалификация", descr: "высшее образование"},
          {"name": "Квалификационная категория", descr: "высшая квалификационная категория"},
          {"name": "Курсы повышения квалификации", descr: ""},
          {"name": "Ученая степень", descr: "Кандидат педагогических наук."},
          {"name": "Общий стаж работы", descr: ""},
          {"name": "Стаж работы по специальности", descr: ""}
        ]
      }

      if (data) {
        commit('setStaff', data)
      }
    } catch (error) {
      throw error
    }
  }
}
const mutations = {
  setStaff: (state, payload) => {
    state.staff = payload
  }
}
const getters = {
  staff: (state) => {
    return state.staff
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
