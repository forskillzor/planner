import { createYear } from "../../components/calendar/core";
import { createCalendar } from "../../components/calendar/core";
import weekView from '../../views/planner/view-week';
import yearView from '../../views/planner/view-year';

export const calendar = {
  namespaced: true,
  state:{
    year: createYear(2020),
    calendar: createCalendar(2020),
    calendarViewCurrentMonth: getCurrentMonth(),
    calendarViewCurrentYear: getCurrentYear(),
    currentYear: getCurrentYear(),
    currentMonth: getCurrentMonth(),
    currentDate: getCurrentDate(),
    getSelectedMonth: getCurrentMonth(),
    view: weekView,
  },
  mutations:{
    setYear(state, year){
      state.year = createYear(year);
    },

    setView(state, payload){
      if (payload)
        state.view = views[payload];
    },

    setCalendarViewCurrentMonth(state, inc){
      state.calendarViewCurrentMonth += inc;
    },

    setCalendarNextMonth(state){
      state.calendarViewCurrentMonth++;
      if (state.calendarViewCurrentMonth > 11){
        state.calendarViewCurrentMonth = 0;
        state.calendarViewCurrentYear++;
      }
    },

    setCalendarPrevMonth(state){
      state.calendarViewCurrentMonth--;
      if (state.calendarViewCurrentMonth < 0){
        state.calendarViewCurrentMonth = 11;
        state.calendarViewCurrentYear--;
      }
    },

    setCalendarViewCurrentYear(state, year){
      state.calendarViewCurrentYear = year;
    }
  },
  getters:{
    getYear(state){
      return state.year;
    },
    getCurrentYear(state){
      return state.currentYear;
    },
    getCurrentMonth(state){
      return state.currentMonth;
    },
    getCurrentDate(state){
      return state.currentDate;
    },
    getSelectedMonth(state){
      return state.selectedMonth;
    },
    getView(state){
      return state.view;
    },
    getCalendarViewCurrentMonth(state){
      return state.calendarViewCurrentMonth;
    },
    getCalendarViewCurrentYear(state) {
      return state.calendarViewCurrentYear;
    }

  },
  actions:{
    setYear(context, year){
      context.commit('setYear', year);
    },
    setView(context, payload){
      context.commit('setView', payload);
    },
    setCalendarViewCurrentMonth(context, inc) {
      context.commit('setCalendarViewCurrentMonth', inc)
    },
    setCalendarViewCurrentYear(context, year) {
      context.commit('setCalendarViewCurrentYear', year)
    },
    setCalendarNextMonth(context){
      context.commit('setCalendarNextMonth');
    },
    setCalendarPrevMonth(context){
      context.commit('setCalendarPrevMonth');
    }
  }
};
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
function getCurrentMonth() {
  const date = new Date();
  return date.getMonth();
}
function getCurrentDate() {
  const date = new Date();
  return date.getDate();
}

const views = {
  'week': weekView,
  'year': yearView,
}
