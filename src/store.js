import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

// Require dependencies
Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.sessionStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default new Vuex.Store({
  state: {
    nextRoute: '',
    routeHistory: '',
    showNextButton: false,
    nextButtonDisable: false,
    progress: '',
    sendInput: true,
    userInput: {
      productType: '',
      industry: '',
      salesMethod: '',
      chargebackCount: '',
      averageTicket: '',
      chargebackManagement: '',
      thirdParty: '',
      chargebackWinRate: '',
      crm: '',
      timestamp: new Date().toString(),
      contactInfo: {
        first: '',
        last: '',
        company: '',
        email: ''
      }
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_NEXT: (state, route) => {
      state.nextRoute = route
    },
    UPDATE_HISTORY: (state, route) => {
      state.routeHistory = route
    },
    TOGGLE_NEXT: (state, bool) => {
      state.showNextButton = bool === undefined
        ? false
        : bool
    },
    TOGGLE_DISABLE: (state, bool) => {
      state.nextButtonDisable = bool === undefined
        ? false
        : bool
    },
    UPDATE_PROGRESS: (state, num) => {
      state.progress = num
    },
    UPDATE_USER_OBJECT: (state, obj) => {
      state.userInput[obj.key] = obj.val
    },
    STOP_SEND_INPUT: (state, bool) => {
      state.sendInput = bool
    }
  },
  actions: {
    updateNextRoute: (context, route) => {
      context.commit('UPDATE_NEXT', route.set)
      context.commit('TOGGLE_NEXT', route.showNext)
      context.commit('TOGGLE_DISABLE', route.disableNextButton)
    },
    updateRouteHistory: (context, route) => {
      context.commit('UPDATE_HISTORY', route)
    },
    toggleNextButton: (context, bool) => {
      context.commit('TOGGLE_NEXT', bool)
    },
    disableNextButton: (context, route) => {
      context.commit('TOGGLE_DISABLE', route)
    },
    updateProgress: (context, num) => {
      context.commit('UPDATE_PROGRESS', num)
    },
    updateUserInput: (context, obj) => {
      context.commit('UPDATE_USER_OBJECT', obj)
    },
    httpFlag: (context, bool) => {
      context.commit('STOP_SEND_INPUT', bool)
    }
  },
  plugins: [vuexLocalStorage.plugin]
})
