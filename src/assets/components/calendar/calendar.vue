<template>
  <div class="calendar">
    <div v-if="mode === 'calendar'" class="calendar__header">
      <button class="calendar__button btn" @click="prevMonth"> <</button>
      <h1 class="month-name">{{ monthNames[activeMonth] }}
        <span class="year">{{ activeYear }}</span>
      </h1>
      <button class="calendar__button btn" @click="nextMonth"> ></button>
    </div>

    <ul class="calendar__month-list">
      <transition appear mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated faster fadeOut">
        <template v-for="(month, index) in yearModel">
            <month v-if="index === activeMonth"
                   :key="'month' + index"
                   :mode="mode"
                   :month="month" >
            </month>
        </template>
      </transition>
    </ul>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {calendarApi} from '../calendar/calendar-api-mixin';
    import monthComponent from '../../components/calendar/month-component';

    export default {
        name: "calendar",
        props: ['mode'],
        mixins: [calendarApi],
        components: {
            'month': monthComponent,
        },
        data() {
            return {}
        },
        methods: {
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

  .list {
    @include reset-list;
  }

  .calendar {
    min-height: 300px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    &__header {
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      height: 35px;
    }

    &__button {
      border-radius: 50%;
      width: 40px;
      height: 35px;
      transition: all 200ms;
    }

    .month-names__list {
      @include reset-list;
      position: relative;
      width: 100%;

      li {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__month-list {
      position: relative;
      @include reset-list;
    }

    &__month {
      margin: 200px;
      @include reset-list;
    }

  }

  .month-name {
    text-align: center;
    width: 100%;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    transition: all 200ms;

    span {
      display: inline
    }

    .year {
      font-weight: 200;
      font-size: 18px;
    }
  }
</style>

