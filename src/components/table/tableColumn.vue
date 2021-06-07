<template>
    <div>
        <tableCell v-for="lesson in lessonList"
                   :class-number="lesson.classNumber"
                   :lesson-name="lesson.lessonName"></tableCell>
    </div>
</template>

<script>
    import tableCell from './tableCell';

  export default {
    props: {
      lessonList: Array
    },
    computed: {
      // getClassesCount() {
      //   return this.$store.getters.getClassesTime.length
      // },
      getLessonList() {
        return this.$store.getters.getLessonsList
      },
      // getLessonCount() {
      //   return this.$store.getters.getLessonsList.length
      // }
    },
    components: {
      tableCell
    }
  }
</script>

<style scoped>

</style>
