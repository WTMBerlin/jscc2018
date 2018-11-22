import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Meetups from './views/Meetups.vue';
import Meetup from './views/Meetup.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: Meetups,
    },
    {
      path: '/meetup/:id',
      name: 'meetup',
      component: Meetup
    }
  ],
});
