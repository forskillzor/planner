import Vue from 'vue';
import VueRouter from 'vue-router'

import Week from '../../assets/views/planner/view-week';
import Year from '../../assets/views/planner/view-year';

Vue.use(VueRouter);


const routes = [
  {
    path: '/week',
    name: 'week',
    component: Week,
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
