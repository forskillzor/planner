<template>
  <li @mousemove="drag" class="rectangle"
      :class="[{ 'selected': isSelected }, 'event-' + event.id]"
      @click="isSelected = !isSelected">
    <p class="event__title">{{event.title}}</p>
  </li>

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
            drag(e){

            }
        },
        computed: {},
        mounted() {
            const rect = document.querySelector('.event-' + this.event.id);
            rect.style.height = ((this.event.duration.end - this.event.duration.start) * this.hourHeight) + 'px';
            rect.style.top = (this.event.duration.start - 7) * this.hourHeight + 'px';
            rect.style.backgroundColor = this.event.color;
        },
        updated() {
            const rect = document.querySelector('.event' + this.index);
            rect.style.height = ((this.event.duration.end - this.event.duration.start) * this.hourHeight) + 'px';
            rect.style.top = (this.event.duration.start - 7) * this.hourHeight + 'px';
            rect.style.backgroundColor = this.event.color;
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
