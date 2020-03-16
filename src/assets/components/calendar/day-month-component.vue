<template>
  <li class="day-month-view"
      :data-date="day.date"
      :class="[{'today': (day.date === actualDate),
              'actual': day.month === day.currentMonth}]">
    {{ day.day }}
  </li>
</template>

<script>
    import {calendarApi} from "./calendar-api-mixin";

    export default {
        name: "day-component",
        props: ['day', 'month'],
        mixins: [calendarApi],
        data() {
            return {}
        },
    }
</script>

<style lang="scss">
  .day-month-view {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    font-weight: 200;
    min-height: 30px;
    height: 100px;
    border: .5px solid #eee;
    transition: background-color .2s;

    &:hover {
      cursor: pointer;
      border: .5px solid #91baff;
    }

    &:active {
      background-color: #91baff;
    }

    &.today {
    }

    &.actual {
      font-weight: 700 !important;
    }
  }

</style>
