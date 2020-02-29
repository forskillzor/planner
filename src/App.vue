<template>
  <div id="app">
    <view-day></view-day>
<!--    <h1>{{msg}}</h1>-->
<!--    <p>{{ monday }}</p>-->
<!--    <p>{{ tuesday }}</p>-->
<!--    <p>{{ wednesday }}</p>-->
<!--    <p>{{ thursday }}</p>-->
<!--    <p>{{ friday }}</p>-->
<!--    <p>{{ saturday }}</p>-->
<!--    <p>{{ sunday }}</p>-->
<!--    <p> Почему-то кирилица работает не так как ожидалось. Это приложение органайзер будет добавлен в протфолио по-->
<!--      завершению работы</p>-->
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
