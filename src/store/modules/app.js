
const app = {
  namespaced: true,
  state: {
    oneTest: 'one-test',
    count: 1,
    isNavActive: '/home/app'
  },
  mutations: {
    sayHelloApp (state) {
      console.log('store app module say hello!')
    },
    increment (state, payload) {
      state.count += payload.amount
    },
    changeNav (state, payload) {
      // console.log(payload.navTo)
      state.isNavActive = payload.navTo
    }
  }
}

export default app
