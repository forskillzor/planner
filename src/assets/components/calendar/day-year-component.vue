<template>
  <li @click="changeCurrentDate"
      class="day-view"
      :data-year="day.year"
      :data-month="day.month"
      :data-day="day.day"
      :data-day-of-week="day.dayOfWeek"
      :data-actual="day.actual"
      :data-current-month="day.currentMonth"
      :class="[{'today': (day.day === actualDate.day
                      && day.month === actualDate.month
                      && day.year === actualDate.year),
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
        data(){
            return{
            }
        },
        methods: {
            changeCurrentDate(){
                console.log(this.day);
                this.setCurrentDate(this.day);
            }
        },
    }
</script>

<style scoped>

</style>
