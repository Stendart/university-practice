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

    lessonsList:['Физ-ра', 'Математика', 'Программирование', 'БД'],

    classesTime: [
      {
        start: '8:00',
        end: '9:30'
      },
      {
        start: '9:50',
        end: '11:20'
      },
      {
        start: '11:30',
        end: '13:00'
      },
      {
        start: '13:10',
        end: '14:40'
      },
      {
        start: '14:45',
        end: '16:15'
      },
    ],

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
    },
    getClassesTime(state) {
      return state.classesTime
    },
    getLessonsList(state) {
      return state.lessonsList
    },
    getCountLessons(state) {
      return state.lessonsList.length
    }
  },
  modules: {
  }
})
