<template>
  <div class="">
    <day-component></day-component>
  </div>
</template>

<script>
  import dayViewComponent from '../../components/calendar/day-today-component';
    export default {
        name: "view-today",
        components: {
            'day-component': dayViewComponent,
        }
    }
</script>

<style scoped>

</style>
