<template>
  <li @click="changeCurrentDate"
      class="day-calendar"
      :data-date="day.date"
      :class="[{'today': (day.date === actualDate),
              'actual':  day.month === day.currentMonth,
              'current': day.day === currentDay &&
                         day.month === currentMonth &&
                         day.year === currentYear }]">
    {{ day.day }}
  </li>
</template>

<script>
    import {calendarApi} from '../calendar/calendar-api-mixin';

    export default {
        name: "day-component",
        props: ['day', 'month'],
        mixins: [calendarApi],
        data() {
            return {}
        },
        methods: {
            changeCurrentDate() {
                this.setCurrentDate(this.day);
            }
        },
    }
</script>

<style lang="scss">
  @import '../../style/core/variables';

  .day-calendar.current::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000000;
    border-radius: 50%;
    opacity: 0.5;
  }

  .day-calendar.actual {
    font-weight: 600 !important;
  }

  .day-calendar.today {
    color: $black;
  }

  .day-calendar.today::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: blue;
    border-radius: 50%;
    opacity: 0.5;
  }

  .day-calendar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    font-weight: 200;
    min-height: 30px;
    border: 1px solid transparent;

    &:hover {
      cursor: pointer;
    }

    &:active {
      background-color: #91baff;
    }
  }

</style>
