<template>
  <li class="day-month-view"
      :data-date="day.date"
      :class="[{'today': (day.date == actualDate),
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
