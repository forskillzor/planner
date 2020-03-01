<template>
  <aside>
    <calendar></calendar>
  </aside>
</template>

<script>
  import calendar from './calendar';
    export default {
        name: "navibar-component",
        components: {
            'calendar': calendar,
        }
    }
</script>

<style lang="scss">

</style>
