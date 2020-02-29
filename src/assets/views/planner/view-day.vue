<template>
  <div class="container">
    <div class="day__header">
      <p class="day-number">26</p>
      <div class="date__wrapper">
        <p class="date__month">Февраля</p>
        <p class="date__day-of-week">Суббота</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "view-day"
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

  .container{
    width: 500px;
    margin: 0 auto;
    border: 1px solid #d2d2d2;
    min-height: 1000px;
  }

</style>
