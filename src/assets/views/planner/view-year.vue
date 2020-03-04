<template>
  <div class="view-year">
    <div class="view-year__header">
      <h1>2020 год</h1>
    </div>
    <div class="scroll-area">
      <div class="year-calendar">
        <month :month="0"></month>
        <month :month="1"></month>
        <month :month="2"></month>
        <month :month="3"></month>
        <month :month="4"></month>
        <month :month="5"></month>
        <month :month="6"></month>
        <month :month="7"></month>
        <month :month="8"></month>
        <month :month="9"></month>
        <month :month="10"></month>
        <month :month="11"></month>
      </div>
    </div>
  </div>
</template>

<script>
  import monthComponent from '../../components/calendar/month-component';
    export default {
        name: "view-year",
        components:{
            'month': monthComponent,
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
