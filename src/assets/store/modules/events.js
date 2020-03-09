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
          start: 12,
          end: 15,
        }
      },
      {
        title: 'Ужин!',
        id: 'dfj3990j3',
        color: '#7aff7f',
        duration: {
          start: 15,
          end: 17,
        }
      },
      {
        title: 'Сон!',
        id: 'dfj3990dfj3',
        color: '#7aff7f',
        duration: {
          start: 20,
          end: 22,
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

  },
  actions: {

  }
};
