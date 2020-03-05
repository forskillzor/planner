<template>
  <aside>
    <calendar mode="calendar"></calendar>
  </aside>
</template>

<script>
  import calendar from './calendar/calendar';
    export default {
        name: "navibar-component",
        components: {
            'calendar': calendar,
        }
    }
</script>

<style lang="scss">

</style>
