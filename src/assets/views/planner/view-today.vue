<template>
  <div class="">
    <day-component></day-component>
  </div>
</template>

<script>
  import dayComponent from '../../components/calendar/day-component';
    export default {
        name: "view-today",
        components: {
            'day-component': dayComponent,
        }
    }
</script>

<style scoped>

</style>
