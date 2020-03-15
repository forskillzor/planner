<template>

  <!-- TODO add current time line -->

  <div class="day-view">
    <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <event-editor
        v-if="showEditor"
        :dateOfTheDay="date"
        :eventBegin="start"
        :eventEnd="end">
      </event-editor>
    </transition>
    <ul class="hours__list">

      <!-- TODO very bad implementation of toolbox -->

      <transition appear
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <event-toolbox v-show="isToolbox"
                       :innerData="toolboxData">
        </event-toolbox>
      </transition>
      <li v-for="hour in hoursList" class="hour noselect" :style="{height: hourHeight + 'px'}"
          @mousedown="setStartDate"
          @mouseup="setEndDate">
        <div class="hour__time">{{ hour }}</div>
      </li>
      <event @showtoolbox="showToolbox"
             @hidetoolbox="hideToolbox"
             v-for="(event, index) in events(date)" class="event"
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
    import eventEditor from '../modals/event-editor';
    import eventToolBox from '../events/event-toolbox';
    import {calendarApi} from '../../components/calendar/calendar-api-mixin';
    import {eventApi} from "../events/event-api-mixin";

    export default {
        name: "view-day",
        components: {
            'event': eventComponent,
            'event-editor': eventEditor,
            'event-toolbox': eventToolBox,
        },
        // TODO unusable prop -->
        props: ['date'],
        mixins: [calendarApi, eventApi],
        data() {
            return {
                isToolbox: false,
                toolboxData: null,
                hourHeight: 50,
                showEditor: false,
                start: '',
                end: '',
            }
        },
        methods: {
            setStartDate: function (e) {
                this.start = Math.ceil(e.target.offsetTop / 50) + 7;
            },
            setEndDate(e) {
                const endDate = (Math.ceil(e.target.offsetTop / 50) + 7);
                this.end = (endDate - this.start) ? endDate + 1 : this.start + 1;
                this.toggleEventEditor()
            },
            toggleEventEditor: function () {
                this.showEditor = !this.showEditor;
            },
            showToolbox: function (toolboxdata) {
                this.isToolbox = true;
                this.toolboxData = toolboxdata;
            },
            hideToolbox: function () {
                this.isToolbox = false;
            }
        },
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

  .day-view {
    position: relative;
    margin: 0;
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
</style>
