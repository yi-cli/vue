//import Vue from 'vue'
import axios from 'axios'

const Axios = axios.create({
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  transformRequest: [(data, headers) => {
    // Do whatever you want to transform the data
    if(data) {
      console.log(data)
    }
    // return data
  }],
  transformResponse: [(res) => {
    // if(res.data && res.data.code !== 0) {
    //   console.log(res)
    // }

    return res
  }],
  // headers: {
  //   "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  // },
  timeout: 5000,
  // This will set http header cookies
  // withCredentials: true
})
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}