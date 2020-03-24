import {createYear, dateFormatter} from "../../components/calendar/core";

export const calendar = {
  namespaced: true,
  state: {
    year: createYear(getCurrentDate().year),
    calendarViewCurrentMonth: getCurrentDate().month,
    calendarViewCurrentYear: getCurrentDate().year,
    currentDate: getCurrentDate(),
    currentTime: getCurrentTime(),
    hoursList: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,],
    hourHeight: 60,
    getSelectedMonth: getCurrentDate().month,
    namesOfMonth: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',],
    dayNames: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  },
  getters: {
    getYear: (state) => state.year,
    getLocaleDate: (state) => {
      let month = state.currentDate.month + 1;
      if (month.toString().length === 1) {
        month = '0' + month;
      }
      return dateFormatter(`${month}/${state.currentDate.day}/${state.currentDate.year}`)

    },
    getCurrentYear: (state) => state.currentDate.year,
    getCurrentMonth: (state) => state.currentDate.month,
    getCurrentDay: (state) => state.currentDate.day,
    getCurrentDayOfWeek: (state) => state.currentDate.dayOfWeek,
    getCurrentDate: (state) => state.currentDate,
    getCalendarViewCurrentMonth: (state) => state.calendarViewCurrentMonth,
    getCalendarViewCurrentYear: (state) => state.calendarViewCurrentYear,
    getDayNames: (state) => state.dayNames,
    getNamesOfMonth: (state) => state.namesOfMonth,
    getMonthDataModel: state => month => state.year[month],
    getHoursList: (state) => state.hoursList,
    getCurrentHour: (state) => state.currentTime.hour,
    getCurrentMinute: (state) => state.currentTime.minute,
    getHourHeight: (state) => state.hourHeight,
  },
  mutations: {
    setYear: (state, year) => state.year = createYear(year),
    setCalendarViewCurrentMonth: (state, inc) => state.calendarViewCurrentMonth += inc,
    setCalendarNextMonth: (state) => {
      state.calendarViewCurrentMonth++;
      if (state.calendarViewCurrentMonth > 11) {
        state.calendarViewCurrentMonth = 0;
        state.calendarViewCurrentYear++;
      }
    },
    setCalendarPrevMonth: (state) => {
      state.calendarViewCurrentMonth--;
      if (state.calendarViewCurrentMonth < 0) {
        state.calendarViewCurrentMonth = 11;
        state.calendarViewCurrentYear--;
      }
    },
    setCalendarViewCurrentYear: (state, year) => state.calendarViewCurrentYear = year,
    setCurrentDate: (state, date) => {
      state.currentDate.year = date.year;
      state.currentDate.month = date.month;
      state.currentDate.day = date.day;
      state.currentDate.dayOfWeek = date.dayOfWeek;
    }
  },
  actions: {
    setYear: (context, year) => context.commit('setYear', year),
    setView: (context, view) => context.commit('setView', view),
    setCalendarViewCurrentMonth: (context, inc) => context.commit('setCalendarViewCurrentMonth', inc),
    setCalendarViewCurrentYear: (context, year) => context.commit('setCalendarViewCurrentYear', year),
    setCalendarNextMonth: (context) => context.commit('setCalendarNextMonth'),
    setCalendarPrevMonth: (context) => context.commit('setCalendarPrevMonth'),
    setCurrentDate: (context, date) => context.commit('setCurrentDate', date),
  }
};

export function getCurrentDate() {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    dayOfWeek: date.getDay(),
  };
}

export function getCurrentTime() {
  const date = new Date();
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
  }
}
