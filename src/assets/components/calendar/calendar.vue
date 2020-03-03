<template>
    <div class="calendar">
      <div class="calendar__header">
        <button class="calendar__button" @click="prevMonth"> < </button>
        <ul  class="month-names__list">
          <li class="list__item" v-for="name in namesOfMonthes"
              v-if="currentMonth === namesOfMonthes.lastIndexOf(name)" >
            <h1 class="month-name">{{ name }} <span class="year">2020</span></h1>
          </li>
        </ul>
        <button class="calendar__button" @click="nextMonth"> > </button>
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
          <transition appear name="fade" mode="out-in"
            :enter-active-class="`animated ${getSlideDirectionIn()}`"
            :leave-active-class="`animated ${getSlideDirectionOut()}`" >
            <ul v-if="currentMonth === year.indexOf(month)" class="calendar__weeks">
              <li v-for="week in month" class="week">
                <ul class="days__list">
                  <li v-for="day in week" class="day"
                      :data-month="day.month"
                      :data-day="day.day" >
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
    import {createMonth} from './core';

    export default {
        name: "calendar",
        data() {
            return {
                currentMonth: this.getCurrentMonth(),
                slideDirection: '',
                namesOfMonthes: [
                    'Январь',
                    'Февраль',
                    'Март',
                    'Апрель',
                    'Май',
                    'Июнь',
                    'Июль',
                    'Август',
                    'Сентябрь',
                    'Октябрь',
                    'Ноябрь',
                    'Декабрь',
                ]
            }
        },
        computed: {
            month() {
                return createMonth(2020, this.currentMonth);
            },
            year(){
                return [
                    createMonth(2020, 0),
                    createMonth(2020, 1),
                    createMonth(2020, 2),
                    createMonth(2020, 3),
                    createMonth(2020, 4),
                    createMonth(2020, 5),
                    createMonth(2020, 6),
                    createMonth(2020, 7),
                    createMonth(2020, 8),
                    createMonth(2020, 9),
                    createMonth(2020, 10),
                    createMonth(2020, 11),
                ]
            }
        },
        methods:{
            getCurrentMonth(){
                const date = new Date();
                return date.getMonth();
            },
            getSlideDirectionIn(){
                return this.slideDirection === 'left'
                ? 'slideInLeft'
                : 'slideInRight';
            },
            getSlideDirectionOut(){
                return this.slideDirection === 'left'
                ? 'slideOutRight'
                : 'slideOutLeft';
            },
            nextMonth(){
                this.currentMonth++;
                this.slideDirection = 'right'
            },
            prevMonth(){
                this.currentMonth--;
                this.slideDirection = 'left'
            }
        },
        mounted() {
            hightlightCurrentDate(this.currentMonth);
        },
        updated() {
            hightlightCurrentDate(this.currentMonth);
        }
    }

    function hightlightCurrentDate(currentMonth) {
        const date = new Date();
        const today = date.getDate();
        const month = date.getMonth();
        document.querySelectorAll('.day').forEach(day => {
            if (parseInt(day.dataset.month) !== currentMonth){
                day.style.color = '#777777';
                day.style.fontWeight = '200';
            }
            else{
                day.style.color = '#000';
                day.style.fontWeight = '400';
            }
            if (parseInt(day.dataset.day) === today
                && parseInt(day.dataset.month) === month)
                day.style.backgroundColor = "#d2d2d2";
            else
                day.style.backgroundColor = 'transparent';
        });
    }
</script>

<style lang="scss">
  @import '../../style/core/mixins';

  .list{
    @include reset-list;
  }
  .calendar {
    width: 80%;
    margin: 0 auto;

    &__header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0 20px 0;
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

        .day {
          display: flex;
          justify-content: center;
          align-items: center;
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

