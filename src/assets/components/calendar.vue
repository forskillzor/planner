<template>
  <div class="calendar">
    <h1>Февраль <span class="calendar__year">2020</span></h1>
    <ul class="calendar__days-of-week">
      <li class="day-name">пн</li>
      <li class="day-name">вт</li>
      <li class="day-name">ср</li>
      <li class="day-name">чт</li>
      <li class="day-name">пт</li>
      <li class="day-name">сб</li>
      <li class="day-name">вс</li>
    </ul>
    <ul class="calendar__weeks">
      <li v-for="week in weeks" class="weeks__item">
        <ul class="week__days">
          <li v-for="day in week" class="day"
              :data-current="day.current"
              :data-number="day.number"
              >{{ day.number }}
          </li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "calendar",
        data(){
            return {
                weeks: [
                    [
                        {number:26, current: false},
                        {number:27, current: false},
                        {number:28, current: false},
                        {number:29, current: false},
                        {number:30, current: false},
                        {number:31, current: false},
                        {number:1, current: true}
                    ],
                    [
                        {number:2, current: true},
                        {number:3, current: true},
                        {number:4, current: true},
                        {number:5, current: true},
                        {number:6, current: true},
                        {number:7, current: true},
                        {number:8, current: true}
                    ],
                    [
                        {number:9, current: true},
                        {number:10, current: true},
                        {number:11, current: true},
                        {number:12, current: true},
                        {number:13, current: true},
                        {number:14, current: true},
                        {number:15, current: true}
                    ],
                    [
                        {number:16, current: true},
                        {number:17, current: true},
                        {number:18, current: true},
                        {number:19, current: true},
                        {number:20, current: true},
                        {number:21, current: true},
                        {number:22, current: true}
                    ],
                    [
                        {number:23, current: true},
                        {number:24, current: true},
                        {number:25, current: true},
                        {number:26, current: true},
                        {number:27, current: true},
                        {number:28, current: true},
                        {number:29, current: true}
                    ],
                    [
                        {number:30, current: true},
                        {number:1, current: false},
                        {number:2, current: false},
                        {number:3, current: false},
                        {number:4, current: false},
                        {number:5, current: false},
                        {number:6, current: false}
                    ],
                ]
            }
        },
        mounted(){
            const date = new Date();
            const today = date.getDate();
            document.querySelectorAll('.day').forEach( day => {
                if(!day.dataset.current)
                    day.style.color = '#777777';
                else
                    day.style.fontWeight = '400';
                if(parseInt(day.dataset.number) === today
                && day.dataset.current)
                    day.style.backgroundColor = "#d2d2d2";
                console.log(`dataset: ${day.dataset.current}`)
            });
        }
    }
</script>

<style lang="scss">
  @import '../style/core/mixins';

  .calendar{
    width: 300px;
    margin: 0 auto;
  }

  .calendar__year{
    font-weight: 200;
    font-size: 18px;
  }
  .day-name{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-bottom: 0;
    background-color: #eeeeee;
  }
  .calendar__days-of-week{
    @include normalize;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
  }
  .calendar__weeks{
    @include normalize;
    list-style: none;
  }
  .week__days{
    @include normalize;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
  }
  .day{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30px;
  }
  .day-nonactive{
    background-color: #eeeeee;
  }

</style>
