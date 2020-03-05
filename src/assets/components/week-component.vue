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
    <div class="scroll-area">
      <div class="hours__wrapper">
        <ul v-for="hour in hours" class="hours__list">
          <hour class="hour"
                :hourHeight="hourHeight"
                :hour="hour">
          </hour>
        </ul>
        <ul class="events__list">
          <event  class="event"
                  :index="0"
                  :hourHeight="hourHeight"
                  :title="events[0].title"
                  :duration="events[0].duration"
                  :color="events[0].color"
                  :reference="this">
          </event>
          <event class="event"
                 :index="1"
                 :hourHeight="hourHeight"
                 :title="events[1].title"
                 :duration="events[1].duration"
                 :color="events[1].color"
                 :reference="this">
          </event>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "day-view-component"
    }
</script>

<style scoped>

</style>
