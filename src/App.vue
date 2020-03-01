<template>
  <div id="app">
    <header class="header"></header>
    <div class="horizontal-wrapper">
      <aside class="sidebar-left"></aside>
      <view-day></view-day>
      <aside class="sidebar-right"></aside>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  import viewDay from './assets/views/planner/view-day';
    export default {
        name: 'app',
        components: {
            'view-day': viewDay,
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
    grid-template-columns: 1fr 1fr 1fr;
  }
  .sidebar-left{
    border-right: 1px solid #e2e2e2;
  }
  .sidebar-right{
    border-left: 1px solid #e2e2e2;
  }
</style>
