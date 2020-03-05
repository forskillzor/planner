import { createYear } from "../../components/calendar/core";

export const calendar = {
  namespaced: true,
  state:{
    year: createYear(2020),
    currentYear: getCurrentYear(),
    currentMonth: getCurrentMonth(),
    currentDate: getCurrentDate(),
    getSelectedMonth: getCurrentMonth(),
  },
  mutations:{
    setYear(state, payload){
      state.year = payload;
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
    }

  },
  actions:{
    setYear(context, payload){
      context.commit('setYear', payload);
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
