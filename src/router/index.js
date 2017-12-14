import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../components/homePage'
import receive from '../components/receive'
import noReceive from '../components/noReceive'
import share from '../components/share'

Vue.use(Router)

export default new Router({
 
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },{
      path: '/receive',
      name: 'receive',
      component: receive
    },{
      path: '/noReceive',
      name: 'noReceive',
      component: noReceive
    },{
      path: '/share',
      name: 'share',
      component: share
    },
  ]
})
