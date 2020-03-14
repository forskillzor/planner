<template>
  <li @click="changeCurrentDate"
      class="day-view"
      :data-date="day.date"
      :class="[{'today': (day.date === actualDate),
              'actual': day.month === day.currentMonth}]">
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

<style scoped>

</style>
