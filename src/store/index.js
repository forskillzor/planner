import Vue from 'vue'
import Vuex from 'vuex'

import { calendar } from './modules/calendar';
import { events } from "./modules/events";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    calendar,
    events,
  }
});
