<template>
  <div class="event-editor">
    <label for="event-name" class="event-editor__input-label">Название</label>
    <input v-model="title"
           type="text" class="event-editor__input" id="event-name">

    <label for="start-time" class="event-editor__input-label">Начало</label>
    <input v-model="start"
           type="text" class="event-editor__input" id="start-time">

    <label for="end-time" class="event-editor__input-label">Конец</label>
    <input v-model="end"
           type="text" class="event-editor__input" id="end-time">

    <label for="event-color" class="event-editor__input-label">Цвет</label>
    <input v-model="color"
           type="color" class="event-editor__input" id="event-color">

    <button @click="save" class="btn btn--active event-editor__button">Сохранить</button>

  </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "event-edit",
        props: ['eventBegin', 'eventEnd'],
        data() {
            return {
                title: '',
                id: '',
                color: '',
                start: this.eventBegin,
                end: this.eventEnd
            }
        },
        computed: {},
        methods: {
            ...mapActions('events', ['addEvent']),
            save(){
                this.id = genarateId();
                this.addEvent({
                    title: this.title,
                    id: this.id,
                    color: this.color,
                    duration:{
                        start: this.start,
                        end: this.end,
                    }
                });
                this.$parent.showEditor = false;
            }
        },
        created(){
            console.log(this.color);
        }
    }
    const genarateId = function(){
        return `f${(+new Date).toString(16)}`;
    }
</script>

<style lang="scss">
  .event-editor {
    position: absolute;
    box-sizing: border-box;
    padding: 20px;
    width: 400px;
    /*height: 200px;*/
    top: 100px;
    left: 100px;
    z-index: 100;
    background-color: #f1f1f1;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #d4d4d4;
    border-radius: 15px;

    &__input-label {
      font-size: 16px;
      color: #757575;
    }

    &__input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding: 0 10px;
      line-height: 30px;
      font-size: 18px;
      border-radius: 5px;
      border: 1px solid #afafaf;
      margin: 10px 0;
    }

    &__button {
      margin: 10px 0;
      float: right;
    }
  }

</style>
