import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './router'
import Util from '@/libs/util'

Vue.use(VueRouter)

const routerConfig = {
  routes: routers
}

export const router = new VueRouter(routerConfig)

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title)
  next()
})

router.afterEach( (to, from) => {
  window.scrollTo(0, 0)
} )

export default router
