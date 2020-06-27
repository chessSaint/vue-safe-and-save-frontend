import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home"
import trafficSituation from "@/components/traffic-situation"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/trafficSituation',
      name: 'trafficSituation',
      component: trafficSituation
    },
  ]
})
