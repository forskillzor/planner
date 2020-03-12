export const events = {
  namespaced: true,
  state: {

    events: [
      {
        title: 'Совещание',
        id: '23jfi3iowfio2',
        color: '#ff96b9',
        duration: {
          start: 9,
          end: 11,
        }
      },
      {
        title: 'Презентация!',
        id: 'd23fid93fd',
        color: '#cb97ff',
        duration: {
          start: 15,
          end: 16,
        }
      },
    ]
  },
  getters: {
    getEvents(state){
      return state.events;
    }
  },
  mutations: {
    addEvent(state, event){
      state.events.push(event);
    },
  },
  actions: {
    addEvent(context, event){
      context.commit('addEvent', event)
    }
  }
};
