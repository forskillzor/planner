<template>
  <div @mousemove.stop="drag" class="rectangle"
      :class="{ 'selected': isSelected }"
       :id="'event-' + event.id"
      @click.stop="isSelected = !isSelected">
    <p class="event__title">{{event.title}}</p>
  </div>

</template>

<script>
    export default {
        name: "event-component",
        props: ['event', 'dayRef', 'hourHeight'],
        data() {
            return {
                isSelected: false,
            }
        },
        methods: {
            showToolTip() {
                console.log('TOOLTIP!');
            },
            // TODO make implementation of drag and drop
            drag(e){
            }
        },
        computed: {},
        mounted() {
            const el = this.$vnode.elm;
            el.style.height = ((this.event.end - this.event.begin) * this.hourHeight) + 'px';
            el.style.top = (this.event.begin - 7) * this.hourHeight + 'px';
            el.style.backgroundColor = this.event.color;
            el.dataset.eventId = this.event.id;
        },
        updated() {
            const el = this.$vnode.elm;
            el.style.height = ((this.event.end - this.event.begin) * this.hourHeight) + 'px';
            el.style.top = (this.event.begin - 7) * this.hourHeight + 'px';
            el.style.backgroundColor = this.event.color;
            el.dataset.eventId = this.event.id;
        }
    }
</script>

<style lang="scss">
  .rectangle {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 1);
    /*border: 2px solid rgba(119, 119, 119, 0.5);*/
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
