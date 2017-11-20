import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from './api/api.js'
Vue.use(axios)
import store from './store'
import './assets/css/base.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')