<template>
  <div class="event__toolbox">
    <span>{{innerData}}</span>
  </div>
</template>

<script>
    export default {
        name: "event-toolbox",
        props: ['innerData'],
        data: function () {
            return {}
        },
        computed: {
        },
        // watch: {
        //     innerData: function (data) {
        //         const el = this.$vnode.elm;
        //         el.style.top = data.y + 'px';
        //         console.warn('watch:', data)
        //     },
        // }
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
