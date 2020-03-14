<template>
    <div class="week-view">
      <day date="03/14/2020"></day>
      <day date="03/15/2020"></day>
      <day date="03/16/2020"></day>
      <day date="03/17/2020"></day>
      <day date="03/18/2020"></day>
      <day date="03/19/2020"></day>
      <day date="03/20/2020"></day>
    </div>
</template>
<!-- TODO date array for week header date-list -->
<script>
  import dayTodayComponent from '../../components/calendar/day-today-component';
    export default {
        name: "view-week",
        components: {
            'day': dayTodayComponent,
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped lang="scss">
  .week-view{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: 600px;
    overflow-y: scroll;
  }
</style>
