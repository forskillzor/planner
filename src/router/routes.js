import Vue from 'vue';
import VueRouter from 'vue-router'

import Today from '../views/planner/view-today';
import Week from '../views/planner/view-week';
import Month from '../views/planner/view-month';
import Year from '../views/planner/view-year';

Vue.use(VueRouter);


const routes = [
  {
    path: '/today',
    name: 'today',
    component: Today,
    props: true
  },
  {
    path: '/week',
    name: 'week',
    component: Week,
    props: true
  },
  {
    path: '/month',
    name: 'month',
    component: Month,
    props: true
  },
  {
    path: '/year',
    name: 'year',
    component: Year,
    props: true
  }
];

export const router = new VueRouter({
  routes: routes,
  mode: 'history'
});
