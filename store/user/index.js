import * as TYPES from './types'
import functions from '~/utils/functions'

const namespaced = true

const state = () => ({
  user: null
})

const actions = {
  // Получение пользователя
  async getUser ({ commit }, data) {
    try {
      const response = await this.$api.get('/users/current')
      if (response.data && response.data.user) {
        commit(TYPES.SET_USER, response.data.user)
      }

      return response.data
    } catch (e) {
      commit('auth/LOG_OUT', null, { root: true })
      return functions.returnError(e)
    }
  }
}

const mutations = {
  [TYPES.SET_USER] (state, payload) {
    state.user = payload
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
