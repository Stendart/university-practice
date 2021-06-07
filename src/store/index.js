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

    lessonsList:[
      {
        lessonName: 'Алгебра',
        classNumber: '210',
        teacherName: 'Ольга Ивановна',
        lessonNumber: '3 пара'
      },
      {
        lessonName: 'Алгебра',
        classNumber: '110',
        teacherName: 'Ольга Ивановна',
        lessonNumber: '4 пара'
      },
      {
        lessonName: 'Английский',
        classNumber: '411',
        teacherName: 'Ирина Олеговна',
        lessonNumber: '5 пара'
      },
      {
        lessonName: 'Английский',
        classNumber: '411',
        teacherName: 'Ирина Олеговна',
        lessonNumber: '6 пара'
      },
      {
        lessonName: 'Английский',
        classNumber: '411',
        teacherName: 'Ирина Олеговна',
        lessonNumber: '7 пара'
      },
      {
        lessonName: 'Английский',
        classNumber: '411',
        teacherName: 'Ирина Олеговна',
        lessonNumber: '8 пара'
      },
    ],

    classesTime: [
      {
        start: {
          hour: 8,
          minutes: 0
        } ,//new Date().setHours(9, 30),// '8:00',
        end: {
          hour: 9,
          minutes: 30
        }//new Date().setHours(9, 30), //'9:30'
      },
      {
        start: {
          hour: 9,
          minutes: 50
        },
        end: {
          hour: 11,
          minutes: 20
        }
      },
      {
        start: {
          hour: 11,
          minutes: 30
        },
        end: {
          hour: 13,
          minutes: 0
        }
      },
      {
        start: {
          hour: 13,
          minutes: 10
        },
        end: {
          hour: 14,
          minutes: 40
        }
      },
      {
        start: {
          hour: 14,
          minutes: 45
        },
        end: {
          hour: 16,
          minutes: 15
        }
      },
      {
        start: {
          hour: 16,
          minutes: 20
        },
        end: {
          hour: 17,
          minutes: 50
        }
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
