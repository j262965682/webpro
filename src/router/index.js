import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/user/login/login'
import register from '@/views/user/register/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user/login',
      name: 'login',
      component: login
    },
    {
      path: '/user/register',
      name: 'register',
      component: register
    },
  ]
})
