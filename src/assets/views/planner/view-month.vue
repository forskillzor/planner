<template>
  <div class="month-component">
    <h1 style="text-align: center">Компонент в разработке</h1>
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
    .day-name {
      display: flex;
      text-align: center;
      background-color: #eee;
      align-content: center;
    }
    .day{
      height: 50px;
      border: 1px solid #d2d2d2;
    }
  }
</style>
