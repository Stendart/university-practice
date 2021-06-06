<template>
    <div class="lesson_list">
        <lessonTablet v-for="lesson in lessonList" :key="lesson.classNumber"
                      :lesson-name="lesson.lessonName"
                      :class-number="lesson.classNumber"
                      :teacher-name="lesson.teacherName"
                      :lesson-number="lesson.lessonNumber"
                      class="lesson_list-tablet"></lessonTablet>
        <img class="home__bg-image" alt="bg image" src="../../assets/3.jpg">
    </div>
</template>

<script>
    import lessonTablet from '../lessonTablet';
  export default {
    name: "LessonList",
    data() {
      return {
        lessonList: [
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
        ]
      }
    },
    components: {
      lessonTablet,
    }
  }
</script>

<style scoped lang="scss">
@import "../../variables";

.lesson_list {
    position: relative;
}
.home__bg-image {
    max-width: 100%;

    position: absolute;
    bottom: 0;
    left: 10%;

    z-index: -1;
}
.lesson_list-tablet {
    margin-top: 10px;

    opacity: 0.9;

    /*<!--background: linear-gradient($top-color, $base-color);-->*/
}
</style>
