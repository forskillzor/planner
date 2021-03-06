import Vue from 'vue';
import App from './App.vue';
import './assets/style/style.scss';
import './assets/style/animate.css';
import { store } from './store/';
import { router } from './router/routes';

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
});
