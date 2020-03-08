<template>
  <li v-for="day in week" class="day"
      :data-year="currentYear"
      :data-month="day.month"
      :data-day="day.day"
      :class="{'today': (day.day === date.day
                      && day.month === date.month
                      && currentYear === getCurrentYear()),
               'actual': day.month === year.indexOf(month)}" >
    {{ day.day }}
  </li>

</template>

<script>
    export default {
        name: "day-component",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
