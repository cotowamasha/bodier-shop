export default {
  async nuxtServerInit ({ commit, dispatch }, { req }) {

    // const token = this.$cookies.get('token')
    //
    // if (token && token !== null) {
    //   this.$api.setHeader('Authorization', `Bearer ${token}`)
    //   const response = await dispatch('user/getUser', null, { root: true })
    //   if (response && response.type === 'error') {
    //     this.$cookies.remove('token')
    //     return false
    //   }
    //   commit('auth/SET_AUTH', { jwt: token }, { root: true })
    // }
  }
}
