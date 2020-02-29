<template>
  <div :id="'event' + index" class="rectangle">
    <p class="event__title">{{title}}</p>
  </div>

</template>

<script>
    export default {
        name: "event-component",
        props: ['duration', 'color', 'reference', 'title', 'index'],
        data() {
            return {
                per_hour: 50
            }
        },
        computed: {
            height() {
                return (this.duration.end - this.duration.start) * this.per_hour;
            }
        },
        mounted() {
            const rect = document.querySelector('#event' + this.index);
            rect.style.height = this.height + 'px';
            rect.style.width = '200px';
            rect.style.backgroundColor = this.color;
            rect.style.opacity = 0.2 + '';
            console.log(this.reference);
        }
    }
</script>

<style scoped lang="scss">
  .rectangle{
    border-radius: 5px;
    .event__title{
      margin: 0;
    }
  }
</style>
