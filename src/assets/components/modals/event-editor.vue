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
        <button @click="hideEditor" class="btn btn--warning event-editor__button--close">Закрыть</button>
        <button @click="save" class="btn btn--active event-editor__button">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex';
    import {dateFormatter} from "../calendar/core";
    import {generateId} from "../events/core/core";
    import calendarComponent from '../calendar/calendar';

    export default {
        name: "event-edit",
        components: {
            'calendar-widget': calendarComponent,
        },
        props: ['mode', 'currentEvent', 'selectedHours'],
        data: function () {
            return {
                title: '',
                id: '',
                date: '',
                begin: '',
                end: '',
                color: '',
            }
        },
        methods: {
            ...mapActions('events', [
                'addEvent',
                'changeEvent',
            ]),
            ...mapMutations('events', [
                'resetEditorState',
                'hideEditor',
            ]),
            save: function () {
                if (this.mode === 'create') {
                    // console.warn('create event', this.title);
                    this.addEvent({
                        title: this.title,
                        date: dateFormatter(valueToUDate(this.date)),
                        begin: this.begin,
                        end: this.end,
                        id: generateId(),
                        color: this.color,
                    });
                } else if (this.mode === 'update') {
                    // console.warn('change event:', this.title);
                    this.changeEvent({
                        title: this.title,
                        date: dateFormatter(valueToUDate(this.date)),
                        begin: this.begin,
                        end: this.end,
                        id: this.id,
                        color: this.color,
                    })
                }
                this.hideEditor();
                this.resetEditorState();
            },
        },
        mounted: function () {
            if (this.mode === 'create') {
                this.date = uDateToValue(this.selectedHours.date);
                this.begin = this.selectedHours.begin;
                this.end = this.selectedHours.end;
            } else if (this.mode === 'update') {
                console.warn('event:', this.currentEvent);
                this.title = this.currentEvent.title;
                this.date = uDateToValue(this.currentEvent.date);
                this.begin = this.currentEvent.begin;
                this.end = this.currentEvent.end;
                this.id = this.currentEvent.id;
                this.color = this.currentEvent.color;
            }
        }
    }

    function valueToUDate(date) {
        const temp = date.split('-');
        return `${temp[1]}/${temp[2]}/${temp[0]}`;
        // return uDate
    }

    function uDateToValue(uDate) {
        // value for <input type="date"/>
        //  return format: '2020-03-04'
        const temp = uDate.split('/');
        let day = temp[1].toString();
        if (day.length === 1) day = '0' + day;
        return `${temp[2]}-${temp[0]}-${day}`;
    }
</script>

<style lang="scss">
  .event-editor {
    position: absolute;
    box-sizing: border-box;
    padding: 20px;
    width: 800px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: #f1f1f1;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #d4d4d4;
    border-radius: 15px;

    &__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__column {
      position: relative;
      width: 47%;
    }

    &__close {
      background-color: #d2d2d2;
      border: 5px;
      padding: 5px;
      cursor: pointer;
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
      margin: 10px 5px;
      float: right;
    }

    &__button--close {
      margin: 10px 5px;
      float: right;
    }
  }

</style>
