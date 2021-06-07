<template>
    <div class="classesTime" :style="{'color': decorationColor}">
        <span class="classesTime__number">
            <span class="classesTime__border" :style="selectLesson">
                {{classesNum}}
            </span>
        </span>
        <span class="classesTime__time">{{parseTime(startClassesTime)}}</span>
        <span class="classesTime__time">{{parseTime(endClassesTime)}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      classesNum: Number,
      startClassesTime: Object,
      endClassesTime: Object,
    },
    methods: {
      parseTime(dateTime) {
        if(dateTime.minutes >= 0 && dateTime.minutes < 10) {
          return `${dateTime.hour} : 0${dateTime.minutes}`
        } else if (dateTime.minutes >= 10 && dateTime.minutes < 60) {
          return `${dateTime.hour} : ${dateTime.minutes}`
        } else throw new Error('Ошибка! Количество минут может быть лишь в диапазоне [0, 59]')
      }
    },
    computed: {
      decorationColor() {
        return this.$store.getters.getDecorationColor
      },
      isCurentLesson() {
        const curentTime = new Date()
        const startClassesTime = new Date()
        const endClassesTime = new Date()
        startClassesTime.setHours(this.startClassesTime.hour)
        startClassesTime.setMinutes(this.startClassesTime.minutes)

        endClassesTime.setHours(this.endClassesTime.hour)
        endClassesTime.setMinutes(this.endClassesTime.minutes)

        return startClassesTime < curentTime && curentTime < endClassesTime
      },
      selectLesson() {
        return this.isCurentLesson ? 'border : 5px solid' + this.decorationColor : ''
      }
    }
  }
</script>

<style scoped>
.classesTime {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;

    text-align: left;
    align-items: center;

    border-top: 1px solid #b2b89d;
}

.classesTime__number {
    font-size: 64px;
}

.classesTime__border {
    display: block;

    text-align: center;

    width: 70px;
    height: 70px;
    border-radius: 50%;
}

.classesTime__time {
    font-size: 32px;
}
</style>
