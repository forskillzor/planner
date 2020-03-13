<template>
  <div class="month-view">
    <month-component
      :mode="'year'"
      :month="month">
    </month-component>
  </div>
</template>

<script>
    import monthComponent from '../../components/calendar/month-component';
    import {mapGetters} from 'vuex';

    export default {
        name: "view-month",
        components: {
            'month-component': monthComponent,
        },
        computed: {
            ...mapGetters('calendar', {
                month: 'getMonthDataModel', // state.currentDate.month
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

    .day-month-view {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #777;
      font-weight: 200;
      min-height: 30px;
      height: 100px;
      border: .5px solid #eee;
      transition: background-color .2s;

      &:hover {
        cursor: pointer;
        border: .5px solid #d2d2d2;
      }

      &:active {
        background-color: #ff96b9;
      }
    }
  }
</style>
