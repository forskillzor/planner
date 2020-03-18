<template>
  <div class="week-view scroll-area">
      <day date="03/16/2020"></day>
      <day date="03/17/2020"></day>
      <day date="03/18/2020"></day>
      <day date="03/19/2020"></day>
      <day date="03/20/2020"></day>
    <day date="03/21/2020"></day>
    <day date="03/22/2020"></day>
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

  .week-view{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
</style>
