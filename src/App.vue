<template>
  <div id="app">
    <header class="header"></header>
    <div class="horizontal-wrapper">
      <navibar class="navibar"></navibar>
<!--      <view-day></view-day>-->
      <view-year></view-year>
      <aside class="sidebar-right"></aside>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  import viewDay from './assets/views/planner/view-day';
  import viewYear from './assets/views/planner/view-year';
  import navibar from './assets/components/navibar-component';
    export default {
        name: 'app',
        components: {
            'view-year': viewYear,
            'view-day': viewDay,
            'navibar': navibar,
        },
        data() {
            return {
                sunday: 'Воскресенье',
                monday: 'Понедельник',
                tuesday: 'Вторник',
                wednesday: 'Среда',
                thursday: 'Четверг',
                friday: 'Пятница',
                saturday: 'Суббота',
            }
        }
    }
</script>

<style lang="scss">
  header{
    min-height: 50px;
    /*background-color: #eeeeee;*/
    border-bottom: 1px solid #e2e2e2;
  }
  .horizontal-wrapper{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
  .navibar{
    border-right: 1px solid #e2e2e2;
  }
  .sidebar-right{
    border-left: 1px solid #e2e2e2;
  }
</style>
