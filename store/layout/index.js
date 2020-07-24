import * as TYPES from './types'

const namespaced = true

const state = () => ({
  authBlock: {
    bg: false,
    box: false
  }
})

const actions = {}

const mutations = {
  [TYPES.CHANGE_STATE] (state, payload) {
    state[payload.type] = payload.data
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
