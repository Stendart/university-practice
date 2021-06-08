export const basicSetting = {
  methods: {
    changeItem(val) {
      console.log(val)
    }
  },
  computed: {
    getCourseList() {
      return this.$store.getters.courseList
    },
    getGroupList() {
      return this.$store.getters.groupList
    },
    getFaculty() {
      return this.$store.getters.getFaculty
    },
    getDecorationColor() {
      return this.$store.getters.getDecorationColor
    },
  },
}
