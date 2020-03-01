<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <ul class="days-of-week">
      <li>пн</li>
      <li>вт</li>
      <li>ср</li>
      <li>чт</li>
      <li>пт</li>
      <li>сб</li>
      <li>вс</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "calendar"
    }
</script>

<style lang="scss">
  .days-of-week{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
  }

</style>
