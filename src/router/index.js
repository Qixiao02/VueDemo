import { createRouter, createWebHashHistory } from 'vue-router'
import TopbarFloot from '../components/TopbarFloot.vue'
import GCD1 from '../components/GCD1'
import main from '../components/main'
import History from '../components/History'
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import Tuange from '../components/Tuange'
import Tuanhui from '..//components/Tuanhui'
const routes = [
  {
    path: '/',
    redirect: '/TopbarFloot/main'
  },
  {
    path:'/TopbarFloot',
    component:TopbarFloot,
    children:[
      {
        path:'main',
        component:main
      },
      {
        path:'GCD1',
        component:GCD1
      },
      {
        path:'History',
        component:History
      },
      {
        path:'Hero1',
        component:Hero1
      },
      {
        path:'Hero2',
        component:Hero2
      },
      {
        path:'Tuange',
        component:Tuange
      },
      {
        path:'Tuanhui',
        component:Tuanhui
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
