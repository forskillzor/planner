<template>
  <li class="rectangle"
      :class="[{ 'selected': isSelected }, 'event' + index]"
      @click="isSelected = !isSelected">
    <p class="event__title">{{title}}</p>
  </li>

</template>

<script>
    export default {
        name: "event-component",
        props: ['duration', 'color', 'reference', 'title', 'index', 'hourHeight'],
        data() {
            return {
                isSelected: false,
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
    width: 100%;
    box-sizing: border-box;
    border: 2px solid rgba(255, 255, 255, 1);
    /*border: 2px solid rgba(119, 119, 119, 0.5);*/
    border-radius: 15px;
    padding: 10px;
    opacity: 0.8;
    position:absolute;
    &:hover{
      opacity: 1;
    }
  }
  .event__title{
    color: #000;
    margin: 0;
    font-size: 14px;
  }
  .selected{
    border: 2px solid rgb(255, 98, 113);
  }
</style>
