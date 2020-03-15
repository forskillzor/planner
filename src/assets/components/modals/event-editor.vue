<template>
  <div class="event-editor">
    <div class="event-editor__row">
      <div class="event-editor__column">
        <label for="event-name" class="event-editor__input-label">Название</label>
        <input v-model="title"
               type="text" class="event-editor__input" id="event-name">

        <div class="event-editor__date-wrapper">
          <label for="date-input" class="event-editor__input-label">Дата</label>
          <input v-model="date" class="event-editor__input" id="date-input" type="date">
        </div>
        <label for="start-time" class="event-editor__input-label">Начало</label>
        <input v-model="begin"
               type="text" class="event-editor__input" id="start-time">

        <label for="end-time" class="event-editor__input-label">Конец</label>
        <input v-model="end"
               type="text" class="event-editor__input" id="end-time">

        <label for="event-color" class="event-editor__input-label">Цвет</label>
        <input v-model="color"
               type="color" class="event-editor__input" id="event-color">
      </div>
      <div class="event-editor__column">
        <calendar-widget mode="calendar"></calendar-widget>
        <button @click="save" class="btn btn--active event-editor__button">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {uDateToValue, valueToUDate} from "../calendar/core";
    import calendarComponent from '../calendar/calendar';

    export default {
        name: "event-edit",
        components: {
            'calendar-widget': calendarComponent,
        },
        props: ['dateOfTheDay', 'eventBegin', 'eventEnd'],
        data: function () {
            return {
                title: '',
                id: '',
                date: uDateToValue(this.dateOfTheDay),
                color: '#d2d2d2',
                begin: this.eventBegin,
                end: this.eventEnd
            }
        },
        computed: {},
        methods: {
            ...mapActions('events', ['addEvent']),
            save() {
                this.id = genarateId();
                this.addEvent({
                    title: this.title,
                    date: valueToUDate(this.date),
                    begin: this.eventBegin,
                    end: this.eventEnd,
                    id: genarateId(),
                    color: this.color,
                });
                this.$parent.showEditor = false;
                console.log('new event:', this.title, this.id, valueToUDate(this.date));
            },
        },
    }
    const genarateId = function () {
        return `f${(+new Date).toString(16)}`;
    };
</script>

<style lang="scss">
  .event-editor {
    position: absolute;
    box-sizing: border-box;
    padding: 20px;
    width: 800px;
    /*height: 200px;*/
    top: 100px;
    left: 100px;
    z-index: 100;
    background-color: #f1f1f1;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #d4d4d4;
    border-radius: 15px;

    &__row{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__column{
      width: 47%;
    }

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
