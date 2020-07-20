import * as TYPES from './types'
import functions from '~/utils/functions'

const namespaced = true

const state = () => ({
  categories: []
})

const actions = {
  async getCategories ({ commit }, data) {
    try {
      const response = await this.$api.get('/categories')
      commit('SET_CATEGORIES', response.data)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  }
}

const mutations = {
  [TYPES.SET_CATEGORIES] (state, payload) {
    state.categories = payload.categories
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
