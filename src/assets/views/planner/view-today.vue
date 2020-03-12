<template>
  <div class="">
    <h1>{{ getCurrentDate.day }} {{ getNamesOfMonth[getCurrentDate.month] }}</h1>
    <day-component :date="getCurrentDate"></day-component>
  </div>
</template>

<script>
  import dayTodayComponent from '../../components/calendar/day-today-component';
  import { mapGetters } from 'vuex';
    export default {
        name: "view-today",
        components: {
            'day-component': dayTodayComponent,
        },
        computed: {
            ...mapGetters('calendar', [
                'getCurrentDate',
                'getNamesOfMonth'
            ])
        }
    }
</script>

<style scoped>

</style>
