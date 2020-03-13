<template>
  <div class="view-today">
    <h1 class="view-today__header">{{ getCurrentDay }} {{ getNamesOfMonth[getCurrentMonth] }}</h1>
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
