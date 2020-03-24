<template>
  <li class="calendar__month">
    <h2 v-if="mode === 'year'" class="month-name">{{ monthName }}</h2>
    <ul class="calendar__days-of-week">
      <li v-for="dayName in dayNames" class="day-name">
        <span>{{ dayName }}</span>
      </li>
    </ul>
    <ul class="calendar__weeks">
      <week v-for="(week, index) in month"
            class="week"
            :mode="mode"
            :key="'week' + index"
            :week="week">
      </week>
    </ul>
  </li>
</template>

<script>
    import {calendarApi} from "./calendar-api-mixin";
    import weekComponent from './week-component';

    export default {
        name: "month-component",
        props: ['mode', 'month'],
        components: {
            'week': weekComponent,
        },
        mixins: [calendarApi],
        data() {
            return {
            }
        },
        computed: {
            monthName(){
                return (this.monthNames[this.yearModel.indexOf(this.month)]);
            },
        }
    }
</script>

<style lang="scss">
  @import '../../assets/style/core/mixins';
  @import '../../assets/style/core/variables';

  .calendar {

    .month-name-year {
      text-align: center;
    }

    &__month{ }

    .day-name {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      margin-bottom: 0;
      background-color: #d2d2d2;
    }

    &__days-of-week {
      @include reset-list;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      min-height: 30px;
    }

    &__weeks {
      @include reset-list;
      /*border: 1px solid #eee;*/

      .days__list {
        @include reset-list;
        display: grid;
        grid-template-columns: repeat(7, 1fr);

      }
    }
  }
</style>
