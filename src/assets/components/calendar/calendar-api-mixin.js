import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export const calendarApi = {
  name: "calendar-api-mixin",
  methods: {
    ...mapActions('calendar', {
      setCurrentDate: 'setCurrentDate',
    })
  },
  computed: {
    ...mapGetters('events', {

      events: 'getEvents'
    }),
    ...mapGetters('calendar', {

      hours: 'getHoursList',
      activeYear: 'getCalendarViewCurrentYear',
      activeMonth: 'getCalendarViewCurrentMonth',
      yearModel: 'getYear',
      monthNames: 'getNamesOfMonth',
      currentYear: 'getCurrentYear',
      currentMonth: 'getCurrentMonth',
      currentDay: 'getCurrentDay',
      currentDayOfWeek: 'getCurrentDayOfWeek',
    })
  }
}
