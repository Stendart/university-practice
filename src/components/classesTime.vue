<template>
    <div class="classesTime" :style="{'color': decorationColor}">
        <span class="classesTime__number">{{classesNum}}</span>
        <span class="classesTime__time">{{startClassesTime}}</span>
        <span class="classesTime__time">{{endClassesTime}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      classesNum: Number,
      startClassesTime: String,
      endClassesTime: String,
    },
    computed: {
      decorationColor() {
        return this.$store.getters.getDecorationColor
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

    .classesTime__time {
        font-size: 32px;
    }
</style>
