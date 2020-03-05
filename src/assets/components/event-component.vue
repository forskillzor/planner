<template>
  <li :class="'event' + index" class="rectangle"
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
            const rect = document.querySelectorAll('.event' + this.index);
            rect.forEach((item)=>{
                item.style.height = this.height + 'px';
                item.style.top = (this.duration.start - 7) * this.hourHeight + 'px';
                item.style.backgroundColor = this.color;
            });
        },
        updated(){
            const rect = document.querySelector('.event' + this.index);
            rect.style.height = this.height + 'px';
            rect.style.top = (this.duration.start - 7) * this.hourHeight + 'px';
            rect.style.backgroundColor = this.color;
        }
    }
</script>

<style lang="scss">
  .rectangle{
    display: block;
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 1);
    /*border: 2px solid rgba(119, 119, 119, 0.5);*/
    /*border-radius: 5px;*/
    padding: 10px;
  }
  .event__title{
    color: #000;
    margin: 0;
    font-size: 14px;
  }
</style>
