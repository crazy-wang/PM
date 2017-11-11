import Vue from 'vue';
import Router from 'vue-router';
import tpl from '@/view/tpl';
import usercommentone from '@/view/usercommentone';
import userResearch from '@/view/userResearch';
import userChose from '@/view/userChose';
import useCar from '@/view/useCar';
import erJi from '@/view/erJi';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name: 'tpl',
    component: tpl
  },
  {
    path: '/usercommentone',
    name: 'usercommentone',
    component: usercommentone
  },
  {
    path: '/userResearch',
    name: 'userResearch',
    component: userResearch
  },
  {
    path: '/userChose',
    name: 'userChose',
    component: userChose
  },
  {
    path: '/useCar',
    name: 'useCar',
    component: useCar
  },
  {
    path: '/erJi',
    name: 'erJi',
    component: erJi
  }]
});
