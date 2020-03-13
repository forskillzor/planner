<template>
  <li class="day-month-view"
      :data-year="day.year"
      :data-month="day.month"
      :data-day="day.day"
      :data-current-month="day.currentMonth"
      :class="[{'today': (day.day === actualDate.day
                      && day.month === actualDate.month
                      && day.year === actualDate.year),
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

</style>
