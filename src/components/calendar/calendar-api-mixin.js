import {mapActions, mapGetters} from 'vuex';
import {getCurrentDateLocalString} from "./core";

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
      localeDate: 'getLocaleDate',
      currentDate: 'getCurrentDate',
      currentYear: 'getCurrentYear',
      currentMonth: 'getCurrentMonth',
      currentDay: 'getCurrentDay',
      currentDayOfWeek: 'getCurrentDayOfWeek',
      currentHour: 'getCurrentHour',
      currentMinute: 'getCurrentMinute',
      hourHeight: 'getHourHeight',
    }),
    actualDate: getCurrentDateLocalString, //from calendar/core.js
  }
};
