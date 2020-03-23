<template>
  <div ref="dayComponent" class="day-view-calendar">
    <div ref="timeline" :style="{top: timelineTop}" class="timeline"></div>
    <ul ref="hour" class="hours__list">
      <li v-for="hour in hoursList" class="hour noselect" :style="{height: hourHeight + 'px'}"
          @mousedown="setStartDate"
          @mouseup="setEndDate">
        <div class="hour__time">{{ hour }}</div>
      </li>
      <event v-for="(event, index) in eventsByDate(date)"
             :hourHeight="hourHeight"
             :event="event"
             :dayRef="this"
             :key="'event' + index">
      </event>
    </ul>
  </div>
</template>

<script>
    import eventComponent from '../events/event-component';
    import {calendarApi} from '../../components/calendar/calendar-api-mixin';
    import {eventApi} from "../events/event-api-mixin";
    import {mapMutations} from 'vuex';

    export default {
        name: "view-day",
        components: {
            'event': eventComponent,
        },
        props: ['date'],   // String
        mixins: [calendarApi, eventApi],
        data() {
            return {
                isToolbox: false,
                begin: '',
                end: '',
            }
        },
        methods: {
            ...mapMutations('events', [
                'showEditor',
                'hideEditor',
                'selectHours',
            ]),
            setStartDate: function (e) {
                this.begin = Math.ceil(e.target.offsetTop / this.hourHeight) + 7;
            },
            setEndDate(e) {
                const endDate = (Math.ceil(e.target.offsetTop / this.hourHeight) + 7);
                this.end = (endDate - this.begin) ? endDate + 1 : this.begin + 1;
                this.selectHours({
                    date: this.date,
                    begin: this.begin,
                    end: this.end,
                });
                this.showEditor();
            },
        },
        computed: {
            // TODO to improve implementation of timeline with general time interval to update time
            // TODO subtract padding-top of day-view-calendar

            timelineTop: function () {
                return this.hourHeight * (this.currentHour - 7) + this.currentMinute + 40 + 'px';
            }
        },
        mounted(){
            console.warn('padding-top:', this.paddingTop)
        }
    }
</script>

<style scoped lang="scss">
  @import '../../style/core/mixins.scss';

  h1 {
    text-align: center;
  }

  .week {
    display: flex;
  }

  .day-calendar {
    position: relative;
    margin: 0;
  }

  .day-view-calendar {
    padding-top: 40px;
    position: relative;
  }

  p {
    color: #4d4d4d;
  }

  .day__header {
    display: flex;
    position: sticky;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0 0 0;
    border-bottom: 1px solid #000;
    margin-bottom: 40px;
  }

  .day-number {
    margin: 5px 20px;
    font-size: 40px;
  }

  .date__wrapper {
    p {
      margin: 5px 10px;
    }

    .date__month {
    }

    .date__day-of-week {
      font-weight: 400;
    }
  }

  .day__category {
    background-color: #dbdbdb;

    .category--text {
      text-align: center;
      margin-bottom: 0;
    }
  }

  .hours__list {
    position: relative;
    @include reset-list;

    .hour {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 0;
      background-color: #fff;
      box-sizing: border-box;
      border-top: 1px solid #e2e2e2;

      &__time {
        color: #4d4d4d;
        font-size: 18px;
        padding: 5px 5px 0 20px;
      }
    }
  }

  .events__list {
    display: none;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    list-style: none;
    position: absolute;
    padding-left: 0;
    margin: 0;
    top: 0;
    left: 0;
  }

  .timeline {
    position: absolute;
    border-bottom: 4px solid red;
    width: 100%;
    z-index: 10;
    opacity: 0.2;
  }
</style>
