import * as TYPES from './types'
import functions from '~/utils/functions'

const namespaced = true;

const state = () => ({
  user: null
})

const actions = {
  // Получение пользователя
  async getUser({ commit }, data) {
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
  },

  // изменить email
  async changeUserEmail({ commit }, data) {
    try {
      const response = await this.$api.put(`/users/${data.userId}/email`, data.data)
      if (response && response.data && response.data.code === '000') {
        commit(TYPES.CHANGE_USER, { type: 'email', value: data.data.email })
      }

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  },

  // изменить телефон
  async changeUserTelefon({ commit }, data) {
    try {
      const response = await this.$api.put(`/users/${data.userId}/phone`, data.data)
      if (response && response.data && response.data.code === '000') {
        commit(TYPES.CHANGE_USER, { type: 'phone', value: data.data.phone })
      }

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  },

  // изменить пароль
  async changeUserPassword({ commit }, data) {
    try {
      const response = await this.$api.put('/users/password', data)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  },

  // Удаление аккаунта
  async deleteAccount({ commit }, data) {
    try {
      const response = await this.$api.delete(`/users`)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  },

  // Добавить qr код в wallet
  async addWallet({ commit }, data) {
    try {
      const response = await this.$api.post('/car-owners/add-qr', data)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  }
}

const mutations = {
  [TYPES.SET_USER](state, payload) {
    state.user = payload
  },

  [TYPES.CHANGE_USER](state, payload) {
    state.user[payload.type] = payload.value
  }
}

const getters = {}

export default {
  namespaced,
  actions,
  state,
  mutations,
  getters,
};
