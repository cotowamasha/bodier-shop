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

  inject('api', api)
}
