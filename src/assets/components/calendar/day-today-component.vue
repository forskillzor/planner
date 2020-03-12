<template>
  <div class="day-view">
    <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <event-editor
        v-if="showEditor"
        :eventBegin="start"
        :eventEnd="end"
        >
      </event-editor>
    </transition>
    <div class="hours__wrapper">
      <ul v-for="hour in hours" class="hours__list"
          @mousedown="setStartDate"
          @mouseup="setEndDate"
      >


        <!-- TODO replace implementation from component to regular layout -->

        <hour class="hour"
              :hourHeight="hourHeight"
              :hour="hour">
        </hour>
      </ul>

      <!-- TODO fix this @handlers propagation -->

      <event v-for="(event, index) in events" class="event"
             :hourHeight="hourHeight"
             :event="event"
             :dayRef="this"
             :key="'event' + index">
      </event>
    </div>
  </div>
</template>

<script>
    import hourComponent from '../app-components/hour-component';
    import eventComponent from '../events/event-component';
    import eventEditor from '../modals/event-editor';
    import {mapGetters} from 'vuex';

    export default {
        name: "view-day",
        components: {
            'hour': hourComponent,
            'event': eventComponent,
            'event-editor': eventEditor,
        },
        data() {
            return {
                hourHeight: 50,
                showEditor: false,
                date:{
                    year:'',
                    month:'',
                    day:'',
                    dayOfMonth:'',
                },
                start: '',
                end: '',
            }
        },
        computed: {
            ...mapGetters('events', {
                events: 'getEvents',
            }),
            ...mapGetters('calendar', {
                hours: 'getHoursList',
            })
        },
        methods: {
            setStartDate(e) {
                this.start = Math.ceil(e.target.offsetTop / 50) + 7;
            },
            setEndDate(e){
                const endDate = (Math.ceil(e.target.offsetTop / 50) + 7);
                this.end = (endDate - this.start)? endDate : this.start + 1;
                this.toggleEventEditor()
            },
            toggleEventEditor() {
                this.showEditor = !this.showEditor;
            }
        },
        updated(){
            console.log('update day-today-component');
        }
    }
</script>

<style scoped lang="scss">
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

  .hours__clip {
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .hours__wrapper {
    position: relative;
  }

  .hours__list {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;

    li.hour {
      box-sizing: border-box;
      border-top: 1px solid #dfdfdf;
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
