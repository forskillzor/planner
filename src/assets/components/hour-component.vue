<template>
  <div class="hour">
    <div class="hour__time">{{hour}}</div>
    <ul class="hour__timeline">
      <li class="timeline__item">
        <p class="minutes">:15</p>
        <p class="content">dfd</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "hour-component",
        props: ['hour'],
    }
</script>

<style scoped lang="scss">
  .hour{
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 50px;
    margin: 0;
    background-color: #fff;
    /*border-bottom: 2px solid #d2d2d2;*/

    &__time{
      font-size: 18px;
      padding: 0 5px 0 20px;
    }

    &__timeline{
      width: 100%;
      list-style:none;
      padding: 0;

      .timeline__item{
        display: block;
        width: 100%;
        border-bottom: 1px solid #d2d2d2;

        .minutes{
          display: inline;
          font-size: 14px;
        }
        .content{
          display: inline;
        }
      }
    }
  }
</style>
