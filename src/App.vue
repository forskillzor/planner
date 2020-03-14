<template>
  <div id="app">
    <app-header class="header"></app-header>
    <div class="horizontal-wrapper">
      <navibar class="navibar"></navibar>
      <div class="main">
        <transition appear mode="out-in"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated faster fadeOut">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  import header from './assets/components/app-components/header';
  import viewWeek from './assets/views/planner/view-week';
  import viewYear from './assets/views/planner/view-year';
  import navibar from './assets/components/app-components/navibar-component';
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

  export default {
        name: 'app',
        components: {
            'app-header': header,
            'view-year': viewYear,
            'view-week': viewWeek,
            'navibar': navibar,
        },
        data() {
            return {
                currentView: viewWeek,
            }
        },
        computed:{
            ...mapGetters('calendar', {
                view: 'getView',
            })
        },
      methods: {
            ...mapActions('events', {
                loadEvents: 'fetchEvents',
            })
      },
        mounted(){
            this.loadEvents()
        }
    }
</script>

<style lang="scss">
  .header{
    min-height: 50px;
    /*background-color: #eeeeee;*/
    border-bottom: 1px solid #e2e2e2;
  }
  .horizontal-wrapper{
    display: grid;
    grid-template-columns: 300px 2fr ;
  }
  .navibar{
    border-right: 1px solid #e2e2e2;
    padding: 20px;
  }
  .main{
    overflow: hidden;
    padding: 20px;
  }
  .sidebar-right{
    border-left: 1px solid #e2e2e2;
  }
</style>
