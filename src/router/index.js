import Vue from 'vue'
import Router from 'vue-router'
import UserMapper from '@/components/UserMapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserMapper',
      component: UserMapper
    }
  ]
})
