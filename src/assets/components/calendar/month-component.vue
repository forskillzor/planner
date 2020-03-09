<template>
  <li >
    <ul class="calendar__weeks"
        v-if="mode ==='calendar'
            && activeMonth === yearModel.indexOf(month)
            ||
            mode === 'year'" >

      <h2 v-if="mode ==='year'"
          class="month-name-year">
        {{ namesOfMonthes[yearModel.indexOf(month)] }}
      </h2>

      <ul class="calendar__days-of-week">
        <li class="day-name">пн</li>
        <li class="day-name">вт</li>
        <li class="day-name">ср</li>
        <li class="day-name">чт</li>
        <li class="day-name">пт</li>
        <li class="day-name">сб</li>
        <li class="day-name">вс</li>
      </ul>

      <week v-for="(week, index) in month"
            class="week"
            :key="'week' + index"
            :week="week">
      </week>
    </ul>
  </li>

</template>

<script>
  import { mapGetters } from 'vuex';
  import weekComponent from './week-component';

    export default {
        name: "month-component",
        props:['mode', 'month'],
        components: {
            'week': weekComponent,
        },
        data(){
            return{
                namesOfMonthes: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', ],
            }
        },
        computed:{
            ...mapGetters('calendar', {
                yearModel: 'getYear',
                activeYear: 'getCalendarViewCurrentYear',
                activeMonth: 'getCalendarViewCurrentMonth',
            })
        }
    }
</script>

<style lang="scss">

</style>
