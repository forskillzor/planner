<template>
    <div class="day">
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
          <ul v-for="hour in hours" class="hours__list">
            <hour class="hour"
                  :hourHeight="hourHeight"
                  :hour="hour">
            </hour>
          </ul>
          <!-- TODO change from props to slot or object -->
          <ul class="events__list">
            <event  v-for="(event, index) in events" class="event"
                    :index="index"
                    :hourHeight="hourHeight"
                    :title="event.title"
                    :duration="event.duration"
                    :color="event.color"
                    :reference="this"
                    :key="'event' + index">
            </event>
          </ul>
        </div>
      </div>
</template>

<script>
  import hourComponent from './hour-component';
  import eventComponent from './events/event-component';
    export default {
        name: "view-day",
        components: {
            'hour': hourComponent,
            'event': eventComponent,
        },
        data(){
            return {
                hours: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,],
                hourHeight: 50,
                events: [
                    {
                        title: 'Совещание',
                        id: '23jfi3iowfio2',
                        color: '#ff96b9',
                        duration: {
                            start: 9,
                            end: 11,
                        }
                    },
                    {
                        title: 'Презентация!',
                        id: 'd23fid93fd',
                        color: '#cb97ff',
                        duration: {
                            start: 12,
                            end: 15,
                        }
                    },
                    {
                        title: 'Ужин!',
                        id: 'dfj3990j3',
                        color: '#7aff7f',
                        duration: {
                            start: 15,
                            end: 17,
                        }
                    },
                    {
                        title: 'Сон!',
                        id: 'dfj3990dfj3',
                        color: '#7aff7f',
                        duration: {
                            start: 20,
                            end: 22,
                        }
                    },

                ]
            }
        }
    }
</script>

<style scoped lang="scss">
  h1{
    text-align: center;
  }
  .week{
    display: flex;
  }
  .day{
    margin: 0;
  }
  p{color: #4d4d4d;}
  .day__header{
    display: flex;
    position: sticky;
    flex-direction: row;
    justify-content: center;
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
  .hours__clip{
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .hours__wrapper{
    position: relative;
  }
  .hours__list  {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;

    li.hour{
      box-sizing: border-box;
      border-top: 1px solid #dfdfdf;
    }
  }

  .events__list{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    list-style: none;
    position: absolute;
    padding-left: 0;
    margin: 0;
    top: 0;
    left: 0;
  }
</style>
