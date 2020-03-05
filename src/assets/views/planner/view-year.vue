<template>
  <div class="view-year">
    <div class="view-year__header">
      <h1>2020 год</h1>
    </div>
    <div class="scroll-area">
      <calendar mode="year"></calendar>
    </div>
  </div>
</template>

<script>
  import calendar from '../../components/calendar/calendar';
    export default {
        name: "view-year",
        components:{
            'calendar': calendar,
        },
        data(){
            return {
            }
        }
    }
</script>

<style lang="scss">
  .view-year{
    padding: 5px;

    &__header{
      text-align: center;
    }
    &__scroll-wrap{
      overflow-y: scroll;
      height: 600px;
    }
  }
  .year-calendar{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
