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
    ...mapGetters('calendar', {

      hoursList: 'getHoursList',
      activeYear: 'getCalendarViewCurrentYear',
      activeMonth: 'getCalendarViewCurrentMonth',
      actualDate: 'getActualDate',
      yearModel: 'getYear',
      monthNames: 'getNamesOfMonth',
      dayNames: 'getDayNames',
      currentDate: 'getCurrentDate',
      currentYear: 'getCurrentYear',
      currentMonth: 'getCurrentMonth',
      currentDay: 'getCurrentDay',
      currentDayOfWeek: 'getCurrentDayOfWeek',
    })
  }
};
