export const events = {
    namespaced: true,
    state: {

      // Events
      events: [],

      // Editors
      selectedEvents: [],
      currentEvent: null,
      isEditor: false,
      selectedHours: null,
      editorMode: '',
    },
    getters: {

      // Events
      getEventsByDate: (state) => (date) => state.events.filter(event => event.date === date),
      getEventsById: state => id => state.events.filter(event => event.id === id),

      // Editor
      getCurrentEvent: state => state.currentEvent,
      getSelectedHours: state => state.selectedHours,
      getSelectedEvents: state => state.selectedEvents,
      isEditor: (state) => state.isEditor,
    },
    mutations: {

      // Events
      addEvent: (state, event) => state.events.push(event),
      changeEvent: (state, event) => {
        const filteredEvents = state.events.filter(item => {
          return item.id === event.id;
        });
        console.warn('from events mutations:', filteredEvents[0]);
      },
      setCurrentEvent: (state, event) => {
        state.currentEvent = event;
        state.editorMode = 'update';
      },

      // Editor
      showEditor: state => {state.isEditor = true},
      selectHours: (state, payload) => {
        state.selectedHours = payload;
        state.editorMode = 'create';
      },
      resetEditorState: state => {
        state.selectedHours = null;
        state.currentEvent = null;
      },
      hideEditor: state => {state.isEditor = false},
      pushToSelected: (state, eventId) => {
        const event = state.events.find(item => item.id === eventId);
        state.selectedEvents.push(event);
      },
      popFromSelected: (state, eventId) => {
        const event = state.selectedEvents.filter(item => item.id === eventId);
        const i = state.selectedEvents.indexOf(event[0]);
        const deleted = state.selectedEvents.splice(i, 1);
      },
    },
    actions: {
      addEvent: (context, event) => context.commit('addEvent', event),

      // TODO make change event action
      selectEvent: (context, eventId) => {
        context.commit('pushToSelected', eventId);
      },
      deselectEvent: (context, eventId) => {
        context.commit('popFromSelected', eventId);
      },
      changeEvent: (context, eventId) => {
        context.commit('changeEvent', eventId)
      },
      fetchEvents: (context) => {
        eventsArray.forEach(event => {
            context.commit('addEvent', event);
          }
        )
        ;
      }
    },
  }
;
// date.toLocaleDateString()
// TODO move this to JSON
const eventsArray = [
  {
    title: 'Совещание',
    date: '03/18/2020',
    begin: 9,
    end: 11,
    id: '23jfi3iowfio2',
    color: '#ff96b9',
  },
  {
    title: 'Презентация!',
    date: '03/18/2020',
    begin: 15,
    end: 16,
    id: 'd23fid93fd',
    color: '#cb97ff',
  },
  {
    title: 'Встреча с подрядчиком',
    date: '03/19/2020',
    begin: 10,
    end: 12,
    id: 'd23fiddf93fd',
    color: '#93ff94',
  },
  {
    title: 'Шоппинг!!',
    date: '03/20/2020',
    begin: 8,
    end: 12,
    id: 'd23fidf93fd',
    color: '#ffea3f',
  },
];
