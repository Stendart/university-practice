<template>
    <div>
        <div class="table__lessons" :style="{'color': getDecorationColor}">
<!--            <tableCell v-for="i in 10" :lesson-name="'Литература'" :class-number="210"></tableCell>-->
            <tableColumn v-for="day of splitSchedule()" :lesson-list="day"></tableColumn>
        </div>
    </div>
</template>

<script>
    import tableCell from './tableCell';
    import tableColumn from './tableColumn';

  export default {
    methods: {
      splitSchedule() {
        console.log('this.getSchedule', this.getSchedule)
        console.log('this', Object.values(this.getSchedule))
        return this.getSchedule
      }
    },
    computed: {
      getDecorationColor() {
        return this.$store.getters.getDecorationColor
      },
      getSchedule() {
        return this.$store.getters.getSchedule
      },
      getLessonList() {
        console.log('getLessonList', this.$store.getters.getLessonsList)
        return this.$store.getters.getLessonsList
      },
    },
    components: {
      tableCell,
      tableColumn
    }
  }
</script>

<style scoped>
.table__lessons {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    /*grid-template-rows: repeat(4, 1fr);*/
    grid-gap: 10px;
}
</style>
