<template>
  <div ref="eventItem" class="rectangle"
       :class="{ 'selected': isSelected }"
       :id="'event-' + event.id"
       @click.stop="selection">
    <transition appear
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
      <event-toolbox v-show="isToolbox"
                     :innerData="toolboxData">
      </event-toolbox>
    </transition>
    <p class="event__title">{{event.title}}</p>
  </div>

</template>

<script>
    import eventToolBox from './event-toolbox';
    import {mapMutations} from 'vuex';

    export default {
        name: "event-component",
        props: ['event', 'dayRef', 'hourHeight'],
        components: {
            'event-toolbox': eventToolBox,
        },
        data: function () {
            return {
                isSelected: false,
            }
        },
        methods: {
            ...mapMutations('events', ['pushToSelected', 'popFromSelected']),

            // TODO make implementation of drag and drop
            drag(e) {
            },

            selection: function () {
                this.isSelected = !this.isSelected;
                // TODO !!!!!!!!!
                if (this.isSelected)
                    this.pushToSelected(this.event.id);
                else
                    this.popFromSelected(this.event.id);
            },
        },
        computed: {
            isToolbox: function () {
                return this.isSelected
            },
            toolboxData: function () {
                return {
                    id: this.event.id,
                    x: 0,
                }
            },
        },
        mounted() {
            initEvent.call(this);
        },
        updated() {
            initEvent.call(this);
        }
    }

    function initEvent() {
        this.$refs.eventItem.style.height = ((this.event.end - this.event.begin) * this.hourHeight) + 'px';
        this.$refs.eventItem.style.top = (this.event.begin - 7) * this.hourHeight + 'px';
        this.$refs.eventItem.style.backgroundColor = this.event.color;
        this.$refs.eventItem.dataset.eventId = this.event.id;
    }
</script>

<style lang="scss">
  .rectangle {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 1);
    border-radius: 15px;
    padding: 10px;
    opacity: 0.8;
    position: absolute;

    &:hover {
      opacity: 1;
    }
  }

  .event__title {
    color: #000;
    margin: 0;
    font-size: 14px;
  }

  .selected {
    border: 2px solid rgb(255, 98, 113);
  }
</style>
