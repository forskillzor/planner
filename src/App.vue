<template>
  <div id="app">
    <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <event-editor
        v-if="isEditor"
        :mode="getEditorMode"
        :currentEvent="getCurrentEvent"
        :selectedHours="getSelectedHours">
      </event-editor>
    </transition>

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
    import header from './components/app-components/header';
    import viewWeek from './views/planner/view-week';
    import viewYear from './views/planner/view-year';
    import navibar from './components/app-components/navibar-component';
    import {mapActions, mapGetters} from 'vuex';
    import eventEditor from './components/modals/event-editor';

    export default {
        name: 'app',
        components: {
            'app-header': header,
            'view-year': viewYear,
            'view-week': viewWeek,
            'navibar': navibar,
            'event-editor': eventEditor,
        },
        data() {
            return {
                currentView: viewWeek,
            }
        },
        computed:{
            ...mapGetters('calendar', {
                view: 'getView',
            }),
            ...mapGetters('events', [
                'isEditor',
                'getEditorMode',
                'getCurrentEvent',
                'getSelectedHours',
            ])
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

  #app{
    position: relative;
  }
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
    padding: 0;
  }
  .sidebar-right{
    border-left: 1px solid #e2e2e2;
  }
</style>
