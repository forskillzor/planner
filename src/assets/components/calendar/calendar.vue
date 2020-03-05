<template>
    <div class="calendar">
      <div v-if="mode === 'calendar'" class="calendar__header">
        <button class="calendar__button btn" @click="prevMonth"> < </button>
        <h1  class="month-name">{{ namesOfMonthes[currentMonth] }}
          <span class="year">{{ currentYear }}</span>
        </h1>
        <button class="calendar__button btn" @click="nextMonth"> > </button>
      </div>

      <ul class="calendar__month-list"
          :class="{'year-grid': mode === 'year'}">
        <li v-for="(month, index) in year"
          class="calendar__month ">

          <transition appear mode="out-in"
                      enter-active-class="animated fadeIn"
                      leave-active-class="animated fadeOut">
          <ul v-if="mode ==='calendar'
                      && currentMonth === year.indexOf(month)
                      ||
                      mode === 'year'"
                          :key="index"
             class="calendar__weeks">

            <h1 v-if="mode ==='year'"
                class="month-name-year">
              {{ namesOfMonthes[year.indexOf(month)] }}
            </h1>

            <ul class="calendar__days-of-week">
              <li class="day-name">пн</li>
              <li class="day-name">вт</li>
              <li class="day-name">ср</li>
              <li class="day-name">чт</li>
              <li class="day-name">пт</li>
              <li class="day-name">сб</li>
              <li class="day-name">вс</li>
            </ul>

              <li v-for="week in month" class="week">
                <ul class="days__list">
                  <li v-for="day in week" class="day"
                      :data-year="currentYear"
                      :data-month="day.month"
                      :data-day="day.day"
                      :class="{'today': (day.day === date.day
                                      && day.month === date.month
                                      && currentYear === getCurrentYear()),
                               'actual': day.month === year.indexOf(month)}" >
                    {{ day.day }}
                  </li>
                </ul>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </div>
</template>

<script>
    import { createMonth } from './core';

    export default {
        name: "calendar",
        props:['mode'],
        data() {
            return {
                currentMonth: this.getCurrentMonth(),
                currentYear: this.getCurrentYear(),
                namesOfMonthes: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', ]
            }
        },
        computed: {
            year(){
                const result = [];
                for (let i = 0; i < 12; ++i){
                    result.push(createMonth(this.currentYear, i));
                }
                return result;
            },
            date(){
                const date = new Date();
                return { day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear()
                }
            }
        },
        methods:{
            getCurrentMonth(){
                const date = new Date();
                return date.getMonth();
            },
            getCurrentYear(){
                const date = new Date();
                return date.getFullYear();
            },
            nextMonth(){
                this.currentMonth++;
                if (this.currentMonth > 11){
                    this.currentMonth = 0;
                    this.currentYear++;
                }
            },
            prevMonth(){
                this.currentMonth--;
                if (this.currentMonth < 0){
                    this.currentMonth = 11;
                    this.currentYear--;
                }
            }
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

