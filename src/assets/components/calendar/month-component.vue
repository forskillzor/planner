<template>
  <li class="calendar__month">
      <slot v-if="mode === 'year'" name="monthName"></slot>
      <ul class="calendar__days-of-week">
        <li class="day-name">пн</li>
        <li class="day-name">вт</li>
        <li class="day-name">ср</li>
        <li class="day-name">чт</li>
        <li class="day-name">пт</li>
        <li class="day-name">сб</li>
        <li class="day-name">вс</li>
      </ul>
    <ul class="calendar__weeks">
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
  @import '../../style/core/mixins';
  @import '../../style/core/variables';

  .calendar{

    .month-name-year{
      text-align: center;
    }

    .day-name {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      margin-bottom: 0;
      background-color: #eeeeee;
    }

    &__days-of-week {
      @include reset-list;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      min-height: 30px;
    }

    &__weeks {
      @include reset-list;

      .days__list {
        @include reset-list;
        display: grid;
        grid-template-columns: repeat(7, 1fr);

        .today {
          background-color: #d2d2d2;
        }

        .actual {
          color: $black !important;
          font-weight: 400 !important;
        }

        .day {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #777;
          font-weight: 200;
          min-height: 30px;
          border: 1px solid transparent;

          &:hover {
            cursor: pointer;
            border: 1px solid #d2d2d2;
          }

          &:active {
            background-color: #ff96b9;
          }
        }
      }
    }
  }
</style>
