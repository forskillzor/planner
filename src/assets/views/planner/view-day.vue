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
    <div class="hours__wrapper">
      <ul class="hours__list">
        <li v-for="hour in hours" class="hour">
          <hour :hour="hour"></hour>
        </li>
      </ul>
      <ul class="events__list">
        <li  class="event">
          <event
            :index="0"
            :title="events[0].title"
            :duration="events[0].duration"
            :color="events[0].color"
            :reference="this">
          </event>
        </li>
        <li class="event">
          <event
            :index="1"
            :title="events[0].title"
            :duration="events[1].duration"
            :color="events[1].color"
            :reference="this">
          </event>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import hourComponent from '../../components/hour-component';
  import eventComponent from '../../components/event-component';
    export default {
        name: "view-day",
        components: {
            'hour': hourComponent,
            'event': eventComponent,
        },
        data(){
            return {
                hours: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,],
                events: [
                    {
                        title: 'First Event!',
                        color: 'red',
                        duration: {
                            start: 9,
                            end: 11,
                        }
                    },
                    {
                        title: 'Second Event!',
                        color: 'blue',
                        duration: {
                            start: 12,
                            end: 15,
                        }
                    }
                ]
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
  .hours__wrapper{
    position: relative;
    box-sizing: border-box;
  }
  .hours__list  {
    box-sizing: border-box;
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
    min-height: 1000px;
  }
  .events__list{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    list-style: none;
    position: absolute;
    padding-left: 100px;
    margin: 0;
    top: 0;
    left: 0;

    .event{
      position:absolute;
    }
  }
  #1{
    top: 0;
  }
  #2{
    top: 100px;
  }

</style>
