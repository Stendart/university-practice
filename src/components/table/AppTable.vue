<template>
    <div>
        <div class="table__lessons" :style="{'color': getDecorationColor}">
            <tableTimeColumn class="time__column"></tableTimeColumn>
            <tableColumn v-for="(lessons, day) of getSchedule"
                         :day="day"
                         :lesson-list="lessons">
            </tableColumn>
        </div>
    </div>
</template>

<script>
    import tableCell from './tableCell';
    import tableColumn from './tableColumn';
    import tableTimeColumn from './tableTimeColumn';

  export default {
    methods: {
    },
    computed: {
      getDecorationColor() {
        return this.$store.getters.getDecorationColor
      },
      getSchedule() {
        return this.$store.getters.getSchedule
      },
      getLessonList() {
        return this.$store.getters.getLessonsList
      },
    },
    components: {
      tableCell,
      tableColumn,
      tableTimeColumn
    }
  }
</script>

<style scoped lang="scss">
@import "../../variables";

.table__lessons {
    display: grid;
    grid-template-columns: 0.5fr repeat(5, 1fr);
    /*grid-template-rows: repeat(4, 1fr);*/
    grid-gap: 10px;
}
.time__column {
    margin-top: $table-title-height;
}
</style>
