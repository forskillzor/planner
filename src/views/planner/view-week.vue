<template>

  <!-- TODO make array by query -->

  <div class="week-view scroll-area">
    <day date="03/23/2020"></day>
    <day date="03/24/2020"></day>
    <day date="03/25/2020"></day>
    <day date="03/26/2020"></day>
    <day date="03/27/2020"></day>
    <day date="03/28/2020"></day>
    <day date="03/29/2020"></day>
  </div>
</template>

<!-- TODO date for days array for week header date-list -->

<script>
    import dayTodayComponent from '../../components/calendar/day-today-component';

    export default {
        name: "view-week",
        components: {
            'day': dayTodayComponent,
        },
    }
</script>

<style lang="scss">

  .week-view {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
</style>
