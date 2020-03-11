<template>
    <div class="week-view">
      <day></day>
      <day></day>
      <day></day>
      <day></day>
      <day></day>
      <day></day>
      <day></day>
    </div>
</template>

<script>
  import dayViewComponent from '../../components/calendar/day-today-component';
    export default {
        name: "view-week",
        components: {
            'day': dayViewComponent,
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
