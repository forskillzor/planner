<template>
  <div class="header__wrap">
    <div class="toolbar">
      <button class="toolbar__button btn" >Сегодня</button>
      <button class="toolbar__button btn"
              :class="{'btn--active': getViewName === 'view-week'}"
        @click="setView('week')">Неделя</button>
      <button class="toolbar__button btn"
              :class="{'btn--active': getViewName === 'month'}"
        @click="setView('month')">Месяц</button>
      <button class="toolbar__button btn"
              :class="{'btn--active': getViewName === 'view-year'}"
        @click="setView('year')">Год</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';
    export default {
        name: "app-header",
        methods:{
            ...mapActions('calendar',
            ['setView'])
        },
        computed:{
            ...mapGetters('calendar',
                ['getViewName'])
        }
    }
</script>

<style lang="scss">
  @import '../style/core/variables';
  .header__wrap{
  }
  .toolbar{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 80px;
    margin:0 auto;

    &__button{
      min-width: 90px;
    }
    .btn--active{
      background-color: #91baff;
    }
  }

</style>
