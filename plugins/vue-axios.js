import config from '~/config'

const isProd = process.env.NODE_ENV === 'production'

export default (ctx, inject) => {
  const api = ctx.$axios.create({
    baseURL: `${isProd ? config.apiProd : config.apiDev}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const token = ctx.store.state.auth.token
  if (token) {
    api.setHeader('Authorization', `Bearer ${token}`)
  }

  api.interceptors.response.use((response) => {
    return response
  }, (err) => {
    const response = { err }
    if (response.err.response.data.code === '616') {
      ctx.app.$cookies.remove('token')

      ctx.app.store.commit('auth/LOG_OUT')
      ctx.redirect('/')
    }

    return Promise.reject(err)
  })

  inject('api', api)
}
