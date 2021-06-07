<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AppTable></AppTable>
  </div>
</template>
<script>
  import AppTable from '../components/table/AppTable';

  export default {
    name: 'About',
    data() {
      return {

      }
    },
    components: {
      AppTable
    }
  }
</script>

<style scoped>

</style>
