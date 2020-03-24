<template>
  <li ref="day" @click="changeCurrentDate"
      class="day-calendar noselect"
      :data-date="day.date"
      :class="{'today': today,
              'actual':  actual,
              'current': current }">
    {{ day.day }}
  </li>
</template>

<script>
    import {calendarApi} from './calendar-api-mixin';

    export default {
        name: "day-component",
        props: ['day', 'month'],
        mixins: [calendarApi],
        data() {
            return {}
        },
        computed: {
            today: function () {
                return this.day.date === this.actualDate
            },
            actual: function () {
                return this.day.month === this.day.currentMonth
            },
            current: function () {

                return this.day.day === this.currentDay &&
                    this.day.month === this.currentMonth &&
                    this.day.year === this.currentYear &&
                    this.day.month === this.day.currentMonth
            },
        },
        methods: {
            changeCurrentDate() {
                if (this.$refs.day.classList.contains('actual'))
                    this.setCurrentDate(this.day);
            }
        },
    }
</script>

<style lang="scss">
  @import '../../assets/style/core/variables';

  .day-calendar.current::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: blue;
    border-radius: 50%;
    opacity: 0.2;
  }

  .day-calendar.actual {
    font-weight: 600 !important;
  }

  .day-calendar.today {
    color: $black;
  }

  .day-calendar.today::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: blue;
    border-radius: 50%;
    opacity: 0.5;
  }

  .day-calendar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    font-weight: 200;
    min-height: 30px;
    border: 1px solid transparent;

    &:hover {
      cursor: pointer;
    }

    &:active {
      background-color: #91baff;
    }
  }

</style>
