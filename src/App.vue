<template>
  <div id="app">
    <view-day></view-day>
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
</style>
