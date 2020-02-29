<template>
  <div class="container">
    <div class="day__header">
      <p class="day-number">26</p>
      <div class="date__wrapper">
        <p class="date__month">Февраля</p>
        <p class="date__day-of-week">Суббота</p>
      </div>
    </div><!-- ./header -->
    <div class="day__category">
      <p class="category--text">категория: Работа</p>
    </div>
    <ul class="hours">
      <li v-for="hour in hours" class="hour">
        <hour :hour="hour"></hour>
      </li>
    </ul>
  </div>
</template>

<script>
  import hourComponent from '../../components/hour-component';
    export default {
        name: "view-day",
        components: {
            'hour': hourComponent,
        },
        data(){
            return {
                hours: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,],
            }
        }

    }
</script>

<style scoped lang="scss">
  h1{
    text-align: center;
  }
  p{color: #4d4d4d;}
  .day__header{
    display: flex;
    flex-direction: row;
    padding: 20px 0 0 0;
    border-bottom: 1px solid #000;
    margin-bottom: 40px;
  }
  .day-number{
    margin: 5px 20px;
    font-size: 40px;
  }
  .date__wrapper {
    p{
      margin: 5px 10px;
    }
    .date__month{ }
    .date__day-of-week{ font-weight: 400; }
  }
  .day__category{
    background-color: #dbdbdb;
    .category--text{
      text-align: center;
      margin-bottom: 0;
    }
  }
  .hours  {
    list-style: none;
    margin: 0;
    padding: 0;

    li.hour{
      border-top: 1px solid #000;
    }
  }

  .container{
    width: 500px;
    margin: 0 auto;
    border: 1px solid #d2d2d2;
    min-height: 1000px;
  }

</style>
