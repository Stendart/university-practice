<template>
    <div class="setting">
        <h2 class="setting__title">Настройка приложения</h2>
        <AppSelect :title="'Факультет'"
                   :item-list="getFaculty"
                   @changeItem="changeItem"
        ></AppSelect>
        <AppSelect :title="'Курс'"
                   :item-list="getCourseList"
                   @changeItem="changeItem"
        ></AppSelect>
        <AppSelect :title="'Группа'"
                   :item-list="getGroupList"
                   @changeItem="changeItem"
        ></AppSelect>
        <ColorSelect class="setting__color_select"></ColorSelect>
    </div>
</template>

<script>
import AppSelect from '../AppSelect';
import ColorSelect from '../ColorSelect';

  export default {
    data() {
      return {
        // faculty: ['Филологический', 'ФТФ', 'Ин. яз'],
      }
    },
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
    },
    components: {
      AppSelect,
      ColorSelect
    }
  }
</script>

<style scoped lang="scss">
@import "../../variables";

.setting__title {
    text-align: left;
    color: $base-color;
}
.setting__color_select {
    margin-top: 10px;
}
</style>
