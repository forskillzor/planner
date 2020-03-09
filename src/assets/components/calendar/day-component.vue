<template>
  <li class="day"
      :data-year="day.year"
      :data-month="day.month"
      :data-day="day.day"
      :data-current-month="day.currentMonth"
      :class="{'today': (day.day === current.day
                      && day.month === current.month
                      && day.year === current.year),
              'actual': day.month === day.currentMonth}">
    {{ day.day }}
  </li>
</template>

<script>
    import {
        getCurrentYear,
        getCurrentMonth,
        getCurrentDate
    } from "./core";
    import { mapGetters } from 'vuex';
    export default {
        name: "day-component",
        props: ['day', 'month'],
        data(){
            return{
            }
        },
        computed: {
            ...mapGetters('calendar', {
                yearModel: 'getYear',
                currentYear: 'getCurrentYear',
                currentMonth: 'getCurrentMonth',
                currentDate: 'getCurrentDate'
            }),
            current(){
                const date = new Date();
                return {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear()
                }
            },
        },
    }
</script>

<style scoped>

</style>
