<template>
  <div @click="edit" class="event__toolbox">
    <span>{{innerData}}</span>
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
            ...mapMutations('events', ['showEditor','setCurrentEvent']),
            edit: function () {
                const event = this.$store.getters['events/getEventsById'](this.innerData.id);
                this.setCurrentEvent(event[0]);
                this.showEditor();
            }
        },
        computed: {
        },
    }
</script>

<style lang="scss">
  .event__toolbox {
    width: 100px;
    height: 50px;
    position: absolute;
    background-color: indianred;
    z-index: 10;
  }
</style>
