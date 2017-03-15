import Vue from 'vue';
import Router from 'vue-router';
import Splash from '@/components/splash/splash';
import Home from '@/components/home/home';
import AppView from '@/components/app-view/app-view';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component : Splash
    },
    {
      path: '/home',
      name: 'home',
      component : Home
    },
    {
      path: '/app-view/:url',
      name: 'app-view',
      component : AppView
    }
  ]
})
