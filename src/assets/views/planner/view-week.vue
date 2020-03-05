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
  import dayComponent from '../../components/day-component';
    export default {
        name: "week-view",
        components: {
            day: dayComponent,
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
