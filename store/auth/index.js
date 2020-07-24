import * as TYPES from './types'

const namespaced = true

const state = () => ({
  auth: false,
  token: null
})

const actions = {
}

const mutations = {
  [TYPES.SET_AUTH] (state, payload) {
    state.auth = true
    state.token = payload.jwt
  },

  [TYPES.LOG_OUT] (state, payload) {
    state.auth = false
    state.token = null

    this.$api.defaults.headers.common.Authorization = ''
    this.$cookies.remove('token')
  }
}

const getters = {}

export default {
  namespaced,
  actions,
  state,
  mutations,
  getters
}
