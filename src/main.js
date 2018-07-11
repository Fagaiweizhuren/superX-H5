// The Vue build version to load with the `import` command
// (runtime-omly or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import { sync } from 'vuex-router-sync'

import './styles/common.css'

import { XHeader,
         Tabbar,
         TabbarItem,
         ViewBox,
         Flexbox,
         FlexboxItem,
         XSwitch,
         Group
       } from 'vux'

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-unused-vars */
const unsync = sync(store, router)

Vue.component('x-header', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('view-box', ViewBox)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('x-switch', XSwitch)
Vue.component('group', Group)

/**
 * 简单的页面操作记录
 * ---------------------
 */
const sxHistory = window.sessionStorage
// 页面刷新清空
sxHistory.clear()

/* eslint-disable no-new */
window.SXVM = new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: { App }
})
