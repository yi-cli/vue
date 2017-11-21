//import Vue from 'vue'
import axios from 'axios'
import utils from '@/utils/utils.js'

const Axios = axios.create({
  baseURL: 'https://api.github.com/',
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  transformRequest: [(data, headers) => {
    // Do whatever you want to transform the data
    if(data) {
      console.log(data)
    }
    return data
  }],
  transformResponse: [(res) => {
    if(res.data && res.data.code !== 0) {
      console.log(res)
    }

    return res
  }],
  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer(params) {
    return utils.serialize(params)
  },
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