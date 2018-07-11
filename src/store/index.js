import Vue from 'vue'
import Vuex from 'vuex'
// import Util from '@/libs/util'

import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    }
  },
  actions: {

  },
  modules: {
    app
  }
})

export default store
