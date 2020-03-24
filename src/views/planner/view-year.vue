<template>
  <div class="view-year">
    <div class="view-year__header">
      <h1>2020 год</h1>
    </div>
    <div class="scroll-area">
      <ul class="calendar year-grid">
        <month v-for="(month, index) in yearModel"
                class="calendar__month"
                mode="year"
                :month="month"
                :key="'month' + index">
        </month>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  import monthComponent from '../../components/calendar/month-component';
    export default {
        name: "view-year",
        components:{
            'month': monthComponent,
        },
        data(){
            return {
            }
        },
        computed: {
            ...mapGetters('calendar', {
                activeYear: 'getCalendarViewCurrentYear',
                activeMonth: 'getCalendarViewCurrentMonth',
                yearModel: 'getYear',
                namesOfMonth: 'getNamesOfMonth'
            }),
        },
        methods:{
            ...mapActions('calendar', {
                nextMonth: 'setCalendarNextMonth',
                prevMonth: 'setCalendarPrevMonth',
            }),
        },
    }
</script>

<style lang="scss">
  @import '../../assets/style/core/mixins';
  .view-year{
    padding: 5px;

    &__header{
      text-align: center;
    }
    &__scroll-wrap{
      overflow-y: scroll;
      overflow-x: hidden;
      height: 600px;
    }
  }
  .year-calendar{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .year-grid{
    @include reset-list;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 10px;
    margin: 0;
  }
</style>
