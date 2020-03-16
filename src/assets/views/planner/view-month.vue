<template>
  <div class="month-view">
    <!-- Configurable month change in getter month() -->
    <month-component
      class="scroll-area"
      :mode="'year'"
      :month="month(currentDate.month)">
    </month-component>
  </div>
</template>

<script>
    import monthComponent from '../../components/calendar/month-component';
    import {mapGetters} from 'vuex';
    import {calendarApi} from '../../components/calendar/calendar-api-mixin';

    export default {
        name: "view-month",
        components: {
            'month-component': monthComponent,
        },
        mixins: [calendarApi],
        computed: {
            ...mapGetters('calendar', {
                month: 'getMonthDataModel', // state.year[state.currentDate.month]
            })
        }
    }
</script>

<style lang="scss">
  .month-view {
    .month-name {
      font-size: 34px;
      font-weight: 400;
    }

    .day-name {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      background-color: #eee;
    }
  }
</style>
