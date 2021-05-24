<template>
    <div class="header">
        <AppTimetable :week-type="weekType" :date="date"></AppTimetable>
        <div class="header__selected-wrapper">
            <AppSelect :title="'Курс обучения'"
                       :item-list="courseList"
                       @changeItem="changeItem"
            ></AppSelect>
            <AppSelect :title="'Группа'"
                       :item-list="groupList"
                       @changeItem="changeItem"
            ></AppSelect>
            <AppSelect :title="'День недели'"
                       :item-list="weekDayList"
                       @changeItem="changeItem"
            ></AppSelect>
        </div>
    </div>
</template>

<script>
import AppTimetable from './AppTimetable';
import AppSelect from './AppSelect';

  export default {
    name: "AppHeader",
    data() {
      return {
        date: new Date,
        weekType: 'Верхняя',
        courseList: ['1 курс', '2 курс', '3 курс'],
        groupList: ['ИВТ', 'Филология', 'История'],
        weekDayList: ['Понедельник', 'Вторник', 'Среда'],
      }
    },
    methods: {
      changeItem(val) {
        console.log(val)
      }
    },
    computed: {
    },
    components: {
      AppTimetable,
      AppSelect
    }
  }
</script>

<style scoped lang="scss">
@import '../../variables';

.header {

}
.header__selected-wrapper {
    width: 95%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
}
</style>
