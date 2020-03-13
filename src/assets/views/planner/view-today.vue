<template>
  <div class="view-today">
    <h1 class="view-today__header">{{ currentDay }} {{ monthNames[currentMonth] }}</h1>
    <day-component :date="currentDate"></day-component>
  </div>
</template>

<script>
  import dayTodayComponent from '../../components/calendar/day-today-component';
  import {calendarApi} from "../../components/calendar/calendar-api-mixin";
  import { mapGetters } from 'vuex';
    export default {
        name: "view-today",
        components: {
            'day-component': dayTodayComponent,
        },
        mixins: [calendarApi],
        computed: {
            ...mapGetters('calendar', [
                'getCurrentDay',
                'getCurrentMonth',
                'getNamesOfMonth',
                'getCurrentDate'
            ])
        }
    }
</script>

<style lang="scss">
  .view-today{
    &__header{
      margin-left: 15px;
    }
  }
</style>
