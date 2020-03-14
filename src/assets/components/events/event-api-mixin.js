import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export const eventApi = {
  name: "event-api-mixin",
  methods: {
    ...mapActions('events', {
      loadEvents: 'fetchEvents',
    }),
  },
  computed: {
    ...mapGetters('events', {

      events: 'getEvents'
    }),
  }

};
