<template>
  <li class="week">
    <ul class="days__list">
        <component :is="currentView"
             v-for="(day, index) in week"
             :key="'day' + index"
             :yearModel="yearModel"
             :month="month"
             :day="day">
        </component>
    </ul>
  </li>
</template>

<script>
  import dayYearComponent from './day-year-component';
  import dayTodayComponent from './day-today-component';
  import dayMonthComponent from './day-month-component';
    export default {
        name: "week-component",
        props: ['mode', 'yearModel', 'month', 'week'],
        components:{
        },
        data(){
            return {
                currentView: dayTodayComponent,
            }
        },
        created() {
            this.currentView = this.$router.currentRoute.name === 'month'
                && this.mode !== 'calendar'? dayMonthComponent : dayYearComponent;
        }

    }
</script>

<style lang="scss">

</style>
