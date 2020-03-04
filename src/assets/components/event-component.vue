<template>
  <li :id="'event' + index" class="rectangle"
      @mouseover.stop="showToolTip">
    <p class="event__title">{{title}}</p>
  </li>

</template>

<script>
    export default {
        name: "event-component",
        props: ['duration', 'color', 'reference', 'title', 'index', 'hourHeight'],
        data() {
            return {
            }
        },
        methods:{
            showToolTip(){
                console.log('TOOLTIP!');
            }

        },
        computed: {
            height() {
                return (this.duration.end - this.duration.start) * this.hourHeight;
            }
        },
        mounted() {
            const rect = document.querySelector('#event' + this.index);
            rect.style.height = this.height + 'px';
            rect.style.width = '200px';
            rect.style.top = (this.duration.start - 7) * this.hourHeight + 'px';
            rect.style.backgroundColor = this.color;
            // rect.style.opacity = 0.2 + '';
            // console.log(this.reference);
        }
    }
</script>

<style lang="scss">
  .rectangle{
    display: block;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
  }
  .event__title{
    color: #000;
    margin: 0;
  }
</style>
