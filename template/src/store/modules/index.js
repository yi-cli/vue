import { INFO } from '../mutation-types'

const state = {
  info: {}
}

const mutations = {
  [INFO](state, info) {
    state.info = info
  }
}

export default {
  state,
  mutations
}