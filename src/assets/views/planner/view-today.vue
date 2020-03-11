<template>
  <div class="">
    <day-component></day-component>
  </div>
</template>

<script>
  import dayTodayComponent from '../../components/calendar/day-today-component';
    export default {
        name: "view-today",
        components: {
            'day-component': dayTodayComponent,
        }
    }
</script>

<style scoped>

</style>
