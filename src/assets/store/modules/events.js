export const events = {
  namespaced: true,
  state: {
    events: [],
  },
  getters: {
    // date === date.toLocaleDateString()
    getEvents: (state) => (date) => state.events.filter( event => event.date === date )
  },
  mutations: {
    // addEvent(state, event){
    //   state.events.push(event);
    // },
    addEvent(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    addEvent(context, event){
      context.commit('addEvent', event)
    },
    fetchEvents(context) {
      eventsArray.forEach( event => {
        context.commit('addEvent', event);
      });
    }
  },
};
// date.toLocaleDateString()
// TODO move this to JSON
const eventsArray = [
  {
    title: 'Совещание',
    date: '3/14/2020',
    begin: 9,
    end: 11,
    id: '23jfi3iowfio2',
    color: '#ff96b9',
  },
  {
    title: 'Презентация!',
    date: '3/14/2020',
    begin: 15,
    end: 16,
    id: 'd23fid93fd',
    color: '#cb97ff',
  },
  {
    title: 'Встреча с подрядчиком',
    date: '3/15/2020',
    begin: 10,
    end: 12,
    id: 'd23fiddf93fd',
    color: '#93ff94',
  },
];
