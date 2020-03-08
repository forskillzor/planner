import { createYear } from "../../components/calendar/core";
import { createCalendar } from "../../components/calendar/core";
import weekView from '../../views/planner/view-week';
import yearView from '../../views/planner/view-year';

export const calendar = {
  namespaced: true,
  state:{
    year: createYear(2020),
    calendar: createCalendar(2020),
    currentYear: getCurrentYear(),
    currentMonth: getCurrentMonth(),
    currentDate: getCurrentDate(),
    getSelectedMonth: getCurrentMonth(),
    view: weekView,
  },
  mutations:{
    setYear(state, payload){
      state.year = payload;
    },
    setView(state, payload){
      if (payload)
        state.view = views[payload];
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
    }

  },
  actions:{
    setYear(context, payload){
      context.commit('setYear', payload);
    },
    setView(context, payload){
      context.commit('setView', payload);
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
