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
    import {dateFormatter} from "../calendar/core";
    import {generateId} from "../events/core/core";
    import calendarComponent from '../calendar/calendar';
    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex';
    import {mapState} from 'vuex';

    // TODO make today-view events [add] and edit (drag and drop)

    export default {
        name: "event-edit",
        components: {
            'calendar-widget': calendarComponent,
        },
        data: function () {
            return {
                title: '',
                id: '',
                date: this.selectedHours.date || '',
                begin: this.selectedHours.begin || '',
                end: this.selectedHours.end,
                color: '',
            }
        },
        computed: {
            ...mapState('events', ['selectedHours', 'editorMode']),
            ...mapGetters('events', {
                currentEvent: 'getCurrentEvent',
                selectedEvents: 'getSelectedEvents',
                selectedHours: 'getSelectedHours',
            }),
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
                console.warn('lololo', this.date);
                this.addEvent({
                    title: this.title,
                    date: dateFormatter(valueToUDate(this.date)),
                    begin: this.begin,
                    end: this.end,
                    id: generateId(),
                    color: this.color,
                });
                this.hideEditor();
                this.resetEditorState();
            },
        },
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
    /*height: 200px;*/
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
