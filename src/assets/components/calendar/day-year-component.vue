<template>
  <li @click="changeCurrentDate"
      class="day-view"
      :data-year="day.year"
      :data-month="day.month"
      :data-day="day.day"
      :data-day-of-week="day.dayOfWeek"
      :data-actual="day.actual"
      :data-current-month="day.currentMonth"
      :class="{'today': (day.day === current.day
                      && day.month === current.month
                      && day.year === current.year),
              'actual': day.month === day.currentMonth}">
    {{ day.day }}
  </li>
</template>

<script>
    import { getCurrentMonth } from "./core";
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        name: "day-component",
        props: ['day', 'month'],
        data(){
            return{
            }
        },
        methods: {
            ...mapActions('calendar', ['setCurrentDate']),
            changeCurrentDate(){
                console.log(this.day);
                this.setCurrentDate(this.day);
                // this.setCurrentDate()
            }
        },
        computed: {
            ...mapGetters('calendar', {
                currentMonth: 'getCurrentMonth',
            }),
            current(){  // TODO  getCurrentDate --> vuex.calendar
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
