import {createYear} from "../../components/calendar/core";
import {createCalendar} from "../../components/calendar/core";

export const calendar = {
  namespaced: true,
  state: {
    year: createYear(2020),
    calendar: createCalendar(2020),
    calendarViewCurrentMonth: getCurrentDate().month,
    calendarViewCurrentYear: getCurrentDate().year,
    currentDate: getCurrentDate(),
    actualDate: getCurrentDate(),
    hoursList: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,],
    hourHeight: 50,
    getSelectedMonth: getCurrentDate().month,
    namesOfMonth: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',],
    dayNames: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  },
  getters: {
    getYear(state) {
      return state.year;
    },
    getActualDate(state) {
      return state.actualDate;
    },
    getCurrentYear(state) {
      return state.currentDate.year;
    },
    getCurrentMonth(state) {
      return state.currentDate.month;
    },
    getCurrentDay(state) {
      return state.currentDate.day;
    },
    getCurrentDayOfWeek(state){
      return state.currentDate.dayOfWeek;
    },
    getCurrentDate(state) {
      return state.currentDate;
    },
    getCalendarViewCurrentMonth(state) {
      return state.calendarViewCurrentMonth;
    },
    getCalendarViewCurrentYear(state) {
      return state.calendarViewCurrentYear;
    },
    getDayNames(state) {
      return state.dayNames;
    },
    getNamesOfMonth(state) {
      return state.namesOfMonth;
    },
    getMonthDataModel(state) {
      return state.year[state.currentDate.month];
    },
    getHoursList(state){
      return state.hoursList;
    }
  },
  mutations: {
    setYear(state, year) {
      state.year = createYear(year);
    },

    setCalendarViewCurrentMonth(state, inc) {
      state.calendarViewCurrentMonth += inc;
    },

    setCalendarNextMonth(state) {
      state.calendarViewCurrentMonth++;
      if (state.calendarViewCurrentMonth > 11) {
        state.calendarViewCurrentMonth = 0;
        state.calendarViewCurrentYear++;
      }
    },

    setCalendarPrevMonth(state) {
      state.calendarViewCurrentMonth--;
      if (state.calendarViewCurrentMonth < 0) {
        state.calendarViewCurrentMonth = 11;
        state.calendarViewCurrentYear--;
      }
    },

    setCalendarViewCurrentYear(state, year) {
      state.calendarViewCurrentYear = year;
    },
    setCurrentDate(state, date){
      state.currentDate.year = date.year;
      state.currentDate.month = date.month;
      state.currentDate.day = date.day;
      state.currentDate.dayOfWeek = date.dayOfWeek;
    }
  },
  actions: {
    setYear(context, year) {
      context.commit('setYear', year);
    },
    setView(context, payload) {
      context.commit('setView', payload);
    },
    setCalendarViewCurrentMonth(context, inc) {
      context.commit('setCalendarViewCurrentMonth', inc)
    },
    setCalendarViewCurrentYear(context, year) {
      context.commit('setCalendarViewCurrentYear', year)
    },
    setCalendarNextMonth(context) {
      context.commit('setCalendarNextMonth');
    },
    setCalendarPrevMonth(context) {
      context.commit('setCalendarPrevMonth');
    },
    setCurrentDate(context, date) {
      context.commit('setCurrentDate', date)
    }
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

