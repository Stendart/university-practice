<template>
    <div>
        <classesTime v-for="(_, idx) in getCountLessons" :key="idx"
                     :classes-num="idx+1"
                     :start-classes-time="getClassesTime[idx]['start']"
                     :end-classes-time="getClassesTime[idx]['end']">
        </classesTime>
    </div>
</template>

<script>
    import classesTime from '../classesTime';
  export default {
    methods: {
      // parseTime(dateTime) {
      //   if(dateTime.minutes >= 0 && dateTime.minutes < 10) {
      //     return `${dateTime.hour} : 0${dateTime.minutes}`
      //   } else if (dateTime.minutes > 10 && dateTime.minutes < 60) {
      //     return `${dateTime.hour} : ${dateTime.minutes}`
      //   } else throw new Error('Ошибка! Количество минут может быть лишь в диапазоне [0, 59]')
      //
      //   // console.log('НОВАЯ ДАТА', new Date(dateTime))
      // }
    },
    computed: {
      getClassesTime() {
        console.log('GETTER', this.$store.getters.getClassesTime )
        return this.$store.getters.getClassesTime
      },
      getCountLessons() {
        console.log('count lesson', this.$store.getters.getCountLessons)
        return this.$store.getters.getCountLessons
      }
    },
    components: {
      classesTime
    }
  }
</script>

<style scoped>

</style>
