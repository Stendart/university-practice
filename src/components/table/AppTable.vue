<template>
    <div>
        <div class="table__lessons" :style="{'color': getDecorationColor}">
            <tableTimeColumn class="time__column"></tableTimeColumn>
            <tableColumn v-for="(lessons, day) of getSchedule"
                         :day="day"
                         :lesson-list="lessons">
            </tableColumn>
        </div>
        <tableSetting class="table__setting"></tableSetting>
    </div>
</template>

<script>
    import tableCell from './tableCell';
    import tableColumn from './tableColumn';
    import tableTimeColumn from './tableTimeColumn';
    import tableSetting from './tableSetting';

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
      tableTimeColumn,
      tableSetting
    }
  }
</script>

<style scoped lang="scss">
@import "../../variables";

.table__lessons {
    display: grid;
    grid-template-columns: 0.5fr repeat(5, 1fr);
    grid-gap: 10px;
}
.time__column {
    margin-top: $table-title-height;
}
.table__setting {
    border-top: 1px solid $border-color;
    padding-top: 50px;
    margin-bottom: 60px;
}
</style>
