<template>
  <div class="header__wrap">
    <div class="toolbar">
      <router-link tag="button"
                   class="toolbar__button btn"
                   active-class="btn--active"
                   :to="{name: 'today'}" >Сегодня</router-link>
      <router-link tag="button"
                   class="toolbar__button btn"
                   active-class="btn--active"
                   :to="{name: 'week'}">Неделя</router-link>
      <router-link tag="button"
                   class="toolbar__button btn"
                   active-class="btn--active"
                   :to="{name: 'month'}">Месяц</router-link>
      <router-link tag="button"
                   class="toolbar__button btn"
                   active-class="btn--active"
                   :to="{name: 'year'}" >Год</router-link>
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
