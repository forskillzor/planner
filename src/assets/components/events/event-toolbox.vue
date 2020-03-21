<template>
  <div class="event__toolbox">
    <span @click="edit"
          class="toolbox__button">Edit</span>
    <span @click="del"
          class="toolbox__button">Delete</span>
  </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: "event-toolbox",
        props: ['innerData'],
        data: function () {
            return {}
        },
        methods: {
            ...mapMutations('events', [
                'showEditor',
                'setCurrentEvent',
                'deleteEvent',
            ]),
            edit: function () {
                const events = this.$store.getters['events/getEventsById'](this.innerData.id);
                this.setCurrentEvent(events[0]);
                this.showEditor();
            },
            del: function () {
                const events = this.$store.getters['events/getEventsById'](this.innerData.id);
                // this.setCurrentEvent(events[0]);
                this.deleteEvent(events[0])
            }
        },
        computed: {
        },
    }
</script>

<style lang="scss">
  .event__toolbox {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    position: absolute;
    top: -50px;
    background-color: #91baff;
    z-index: 50;
    border-radius: 15px;
    padding: 10px;

    .toolbox__button {
      cursor: pointer;
      z-index: 10;
      background-color: #d2d2d2;
      padding: 5px;
      border-radius: 5px;
    }
  }
</style>
