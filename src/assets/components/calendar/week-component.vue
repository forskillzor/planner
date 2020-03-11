<template>
  <li class="week">
    <ul class="days__list">
      <day v-for="(day, index) in week" :key="'day' + index"
           :yearModel="yearModel"
           :month="month"
           :day="day">
      </day>
    </ul>
  </li>
</template>

<script>
  import dayComponent from './day-component';
    export default {
        name: "week-component",
        props: ['yearModel', 'month', 'week'],
        components:{
            'day': dayComponent,
        }
    }
</script>

<style lang="scss">

</style>
