import Main from '@/views/Main.vue'

export const appError = {
  path: '/error',
  name: 'errorIndex',
  meta: {
    title: '服务端错误'
  }
}

export const appRouter = {
  path: '/home',
  name: 'mainPage',
  meta: {
    title: 'HI SUPERX-H5'
  },
  component: Main,
  children: [
    {
      path: 'app',
      component: resolve => { require(['@/views/app/app.vue'], resolve) }
    },
    {
      path: 'shop',
      component: resolve => { require(['@/views/shop/shop.vue'], resolve) }
    },
    {
      path: 'user',
      component: resolve => { require(['@/views/user/user.vue'], resolve) }
    },
    {
      path: 'demo',
      component: resolve => { require(['@/views/demo/demo.vue'], resolve) }
    },
    {
      path: 'component/all-in',
      component: resolve => { require(['@/views/demo/components/all-in.vue'], resolve) }
    },
    {
      path: 'component/x-switch',
      component: resolve => { require(['@/views/demo/components/x-switch.vue'], resolve) }
    }
  ]
}
const rootRouter = {
  path: '/',
  redirect: '/home/app'
}

const pageAll = {
  path: '*',
  redirect: '/home/component/all-in'
}

export const routers = [
  rootRouter,
  appError,
  appRouter,
  pageAll
]
