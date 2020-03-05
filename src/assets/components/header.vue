<template>
  <div class="header__wrap">
    <div class="toolbar">
      <button class="toolbar__button btn" >Сегодня</button>
      <button class="toolbar__button btn"
              :class="{'btn--active': getView === 'week'}"
        @click="setView('week')">Неделя</button>
      <button class="toolbar__button btn"
              :class="{'btn--active': getView === 'month'}"
        @click="setView('month')">Месяц</button>
      <button class="toolbar__button btn"
              :class="{'btn--active': getView === 'year'}"
        @click="setView('year')">Год</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';
    export default {
        name: "header",
        methods:{
            ...mapActions('calendar',
            ['setView'])
        },
        computed:{
            ...mapGetters('calendar',
                ['getView'])
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
  }

</style>
