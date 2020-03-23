<template>
  <div ref="eventItem" class="event"
       :class="{ 'selected': isSelected }"
       :id="'event-' + event.id"
       @click.stop="selection"
       @mouseenter="isToolbox = true"
       @mouseleave="isToolbox = false">
    <div class="event__wrapper">
      <p class="event__title">{{event.title}}</p>
      <transition appear
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <div v-if="isToolbox" class="toolbox">
          <div @click.stop="edit" class="toolbox__item edit">
            <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
            </svg>
          </div>
          <div @click.stop="del" class="toolbox__item delete">
            <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"/>
            </svg>
          </div>
        </div>
      </transition>
    </div>
  </div>

</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: "event-component",
        props: ['event', 'dayRef', 'hourHeight'],
        components: {
        },
        data: function () {
            return {
                isSelected: false,
                isToolbox: false,
            }
        },
        methods: {
            ...mapMutations('events', [
                'pushToSelected',
                'popFromSelected',
                'setCurrentEvent',
                'deleteEvent',
                'showEditor',
            ]),
            edit: function () {
                this.setCurrentEvent(this.event);
                this.showEditor();
            },
            del: function () {
                this.deleteEvent(this.event);
            },

            // TODO make implementation of drag and drop
            drag(e) {
            },

            selection: function () {
                this.isSelected = !this.isSelected;
                // TODO !!!!!!!!!
                if (this.isSelected) {
                    this.pushToSelected(this.event.id);
                }
                else{
                    this.popFromSelected(this.event.id);
                }
                this.setCurrentEvent(this.event);
            },
        },
        computed: {
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
  .event {
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

      & .toolbox {
        display: flex;
      }
    }

    &__wrapper {
      position: relative;
    }

    .toolbox {
      position: absolute;
      display: flex;
      top: -60px;
      right: 0;
      padding: 10px;
      box-sizing: border-box;


      &__item {
        position: relative;
        margin-left: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #9c9c9c;
        background-color: #eee;
        cursor: pointer;

        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
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
