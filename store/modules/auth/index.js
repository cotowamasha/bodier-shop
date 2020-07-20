import * as TYPES from './types'

const namespaced = true;

const state = () => ({
  auth: false,
  token: null
})

const actions = {
  // Регистрация
  async signUp({ commit }, data) {
    try {
      const resposne = await this.$api.post('/public/users/registration/user-details', data)

      return response.data
    } catch (e) {
      return this.$funcs.returnError(e)
    }
  },

  // Авторизация
  async signIn({ commit, dispatch }, data) {
    try {
      const response = await this.$api.post('/public/auth/sign-in', data)
      if (response.data && response.data.code === '000') {
        const jwt = response.data.jwt
        this.$api.setHeader('Authorization', `Bearer ${jwt}`)
        const response2 = await dispatch('user/getUser', { jwt }, { root: true })
        if (response2 && response2.type === 'error') {
          return response2
        }
        commit(TYPES.SET_AUTH, response.data)
        this.$cookies.set('token', jwt, {
          maxAge: 1800
        })
      }

      return response.data
    } catch (e) {
      return this.$funcs.returnError(e)
    }
  }
}

const mutations = {
  [TYPES.SET_AUTH](state, payload) {
    state.auth = true
    state.token = payload.jwt
  },

  [TYPES.LOG_OUT](state, payload) {
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
  getters,
};
