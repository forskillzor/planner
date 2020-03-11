<template>
  <div class="month-component">
    <month-component
      :mode="'year'"
      :month="month">
    </month-component>
  </div>
</template>

<script>
  import monthComponent from '../../components/calendar/month-component';
  import { mapGetters } from 'vuex';
    export default {
        name: "view-month",
        components: {
            'month-component': monthComponent,
        },
        computed: {
            ...mapGetters('calendar', {
                month: 'getMonthDataModel',
            })
        }
    }
</script>

<style lang="scss">
  .month-component{
    .month-name{
      font-size: 34px;
      font-weight: 400;
    }
    .day-name {
      display: flex;
      justify-content: center;
      align-items: center ;
      font-size: 16px;
      font-weight: 400;
      background-color: #eee;
    }
    .day{
      height: 100px;
      border: 1px solid #d2d2d2;
    }
  }
</style>
