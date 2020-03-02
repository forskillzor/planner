<template>
  <div class="calendar">
    <div class="calendar__header">
      <button class="prev" @click="currentMonth--"> <</button>
      <h1>{{namesOfMonthes[currentMonth]}} <span class="calendar__year">2020</span></h1>
      <button class="next" @click="currentMonth++"> ></button>
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
    <ul class="calendar__weeks">
      <li v-for="week in weeks" class="weeks__item">
        <ul class="week__days">
          <li v-for="day in week" class="day"
              :data-month="day.month"
              :data-day="day.day"
          >{{ day.day }}
          </li>
        </ul>
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
            weeks() {
                return createMonth(2020, this.currentMonth);
            },
        },
        methods:{
            getCurrentMonth(){
                const date = new Date();
                return date.getMonth();
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
            if (parseInt(day.dataset.month) !== currentMonth)
                day.style.color = '#777777';
            else
                day.style.fontWeight = '400';
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

  .calendar {
    width: 80%;
    margin: 0 auto;
  }
  .calendar__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button{
      border-radius: 50%;
      border:0;
      width: 40px;
      height: 40px;
      background-color: #eeeeee;
      outline: none;

      &:hover{
        cursor: pointer;
        background-color: #999999;
      }
    }
  }

  .calendar__year {
    font-weight: 200;
    font-size: 18px;
  }

  .day-name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-bottom: 0;
    background-color: #eeeeee;
  }

  .calendar__days-of-week {
    @include normalize;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
    min-height: 30px;
  }

  .calendar__weeks {
    @include normalize;
    list-style: none;
  }

  .week__days {
    @include normalize;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30px;
    border: 1px solid transparent;
    /*transition-property: border;*/
    /*transition-duration: 200ms;*/

    &:hover {
      cursor: pointer;
      border: 1px solid #d2d2d2;
    }

    &:active {
      background-color: #ff96b9;
    }
  }

  .day-nonactive {
    background-color: #eeeeee;
  }

</style>

