<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <ul class="calendar__days-of-week">
      <li>пн</li>
      <li>вт</li>
      <li>ср</li>
      <li>чт</li>
      <li>пт</li>
      <li>сб</li>
      <li>вс</li>
    </ul>
    <ul class="calendar__weeks">
      <li v-for="week in weeks" class="weeks__item">
        <ul class="week__days">
          <li v-for="day in week" class="day">{{ day }}</li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "calendar",
        data(){
            return {
                weeks: [
                    [2, 3, 4, 5, 6, 7, 8],
                    [9, 10, 11, 12, 13, 14, 15],
                    [16, 17, 18, 19, 20, 21, 22],
                    [23, 24, 25, 26, 27, 28, 29],
                ]
            }
        }
    }
</script>

<style lang="scss">
  @import '../style/core/mixins';
  .calendar__days-of-week{
    //@include normalize;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
  }
  .calendar__weeks{
    //@include normalize;
    list-style: none;
  }
  .week__days{
    @include normalize;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
  }

</style>
