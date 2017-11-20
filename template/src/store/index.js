import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import index from './modules'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    index
  },
  actions,
  strict: debug
})