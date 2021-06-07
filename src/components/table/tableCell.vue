<template>
    <div class="cell">
        <p class="cell__title"> {{lessonName}}</p>
        <p class="cell__class-number">{{classNumber}}</p>
    </div>
</template>

<script>
  export default {
    props: {
      lessonName: String,
      classNumber: Number
    },

  }
</script>

<style scoped>
    .cell {
        border: 1px solid black;
        min-height: 100px;

        position: relative;
    }
    .cell__title {
        margin-left: 10px;
        text-align: left;

        font-size: 12px;
    }
    .cell__class-number {
        position: absolute;
        bottom: 0;
        left: 10px;

        color: #c0936b;
    }
</style>
