<template>
  <div class="">
    <h1>This is an about page</h1>
    <AppTable class="table"></AppTable>
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
.table {
  width: 80%;
  margin: 0 auto;
}
</style>
