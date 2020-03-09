<template>
    <div class="calendar">
      <div v-if="mode === 'calendar'" class="calendar__header">
        <!-- TODO fix caledar buttons -->
        <button class="calendar__button btn" @click="prevMonth"> < </button>
        <h1  class="month-name">{{ namesOfMonthes[activeMonth] }}
          <span class="year">{{ activeYear }}</span>
        </h1>
        <button class="calendar__button btn" @click="nextMonth"> > </button>
      </div>
      <ul class="calendar__month-list"
          :class="{'year-grid': mode === 'year'}">

        <!-- TODO extract month -->

          <month class="calendar__month " v-for="(month, index) in yearModel"
                      :mode="mode"
                      :month="month"
                      :key="'month' + index">
          </month>
      </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    import monthComponent from '../../components/calendar/month-component';

    export default {
        name: "calendar",
        props:['mode'],
        components: {
            'month': monthComponent,
        },
        data() {
            return {
                namesOfMonthes: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', ],
            }
        },
        computed: {
            ...mapGetters('calendar', {
                activeYear: 'getCalendarViewCurrentYear',
                activeMonth: 'getCalendarViewCurrentMonth',
                yearModel: 'getYear',
            }),
        },
        methods:{
            ...mapActions('calendar', {
                nextMonth: 'setCalendarNextMonth',
                prevMonth: 'setCalendarPrevMonth',
            }),
        },
    }
</script>

<style lang="scss">
  @import '../../style/core/mixins';
  @import '../../style/core/variables';

  .list{
    @include reset-list;
  }
  .calendar {
    width: 90%;
    min-height: 300px;
    margin: 0 auto;

    &__header{
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      height: 35px;
    }

    &__button{
      border-radius: 50%;
      width: 40px;
      height: 35px;
      transition: all 200ms;
    }
    .month-names__list{
      @include reset-list;
      position: relative;
      width: 100%;
      li{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .month-name{
      width: 200px;
      margin: 0;
      transition: all 200ms;
      span{ display: inline};

      .year {
        font-weight: 200;
        font-size: 18px;
      }
    }
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
    &__month-list{
      overflow-x: hidden;
      position: relative;
      @include reset-list;
    }
    .year-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
    &__month{
      @include reset-list;
    }
    &__weeks {
      @include reset-list;

      .days__list {
        @include reset-list;
        display: grid;
        grid-template-columns: repeat(7, 1fr);

        .today{
          background-color: #d2d2d2;
        }
        .actual{
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

