import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: new Date,
    weekType: 'Верхняя',
    courseList: ['1 курс', '2 курс', '3 курс'],
    groupList: ['ИВТ', 'Филология', 'История'],
    faculty: ['Филологический', 'ФТФ', 'Ин. яз'],
    weekDayList: ['Понедельник', 'Вторник', 'Среда'],

    decorationColor: '#9ccd64',
  },
  mutations: {
    setDecorationColor(state, color) {
      state.decorationColor = color
    }
  },
  actions: {
  },
  getters: {
    courseList(state) {
      return state.courseList
    },
    groupList(state) {
      return state.groupList
    },
    weekType(state) {
      return state.weekType
    },
    getDate(state) {
      return state.date
    },
    weekDayList(state) {
      return state.weekDayList
    },
    getFaculty(state) {
      return state.faculty
    },
    getDecorationColor(state) {
      return state.decorationColor
    }
  },
  modules: {
  }
})
