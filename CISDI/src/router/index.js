import Vue from 'vue'
import Router from 'vue-router'
import nav from '@/components/nav'
import index from '@/components/index'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'nav',
      redirect:'/index',
      component: nav,
      children:[{
        path: '/index',
        name: 'index',
        component: index,
    },
    {
        path: '/list',
        name: 'list',
        component: list,
    }]
    }
  ]
})
