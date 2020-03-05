<template>
  <div class="month-component">
    <div class="calendar__header">
      <h1 class="month-name">{{ namesOfMonthes[currentMonth] }} </h1>
    </div>
    <ul class="calendar__days-of-week">
      <li class="day-name">пн</li>
      <li class="day-name">вт</li>
      <li class="day-name">ср</li>
      <li class="day-name">чт</li>
      <li class="day-name">пт</li>
      <li class="day-name">сб</li>
      <li class="day-name">вс</li>
    </ul>
    <ul class="calendar__month-list">
      <li v-for="month in year"
          class="calendar__month">
        <ul v-show="currentMonth === year.indexOf(month)"
            :key="`${currentMonth}`"
            class="calendar__weeks">
          <li v-for="week in month" class="week">
            <ul class="days__list">
              <li v-for="day in week" class="day"
                  :data-year="currentYear"
                  :data-month="day.month"
                  :data-day="day.day" >
                {{ day.day }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
    import { createMonth } from './core';

    export default {
        name: "calendar",
        props: ['month'],
        data() {
            return {
                currentMonth: this.month,
                currentYear: this.getCurrentYear(),
                slideDirection: '',
                namesOfMonthes: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', ]
            }
        },
        computed: {
            year(){
                const result = [];
                for (let i = 0; i < 12; ++i){
                    result.push(createCalendar(this.currentYear, i));
                }
                return result;
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
  .month-component {
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

      button{
        border-radius: 50%;
        border:0;
        width: 40px;
        height: 35px;
        background-color: #eeeeee;
        outline: none;
        transition: all 200ms;

        &:hover{
          cursor: pointer;
          background-color: #999999;
        }
      }
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
      position: relative;
      @include reset-list;
    }
    &__month{
      @include reset-list;
      overflow: hidden;
      position: absolute;
      box-sizing: border-box;
      width: 100%;
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
        .day {
          display: flex;
          justify-content: center;
          align-items: center;
          color: blue;
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
    .actual{
     color: $black;
    }
  }
</style>

