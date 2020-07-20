module.exports = {
  head: {
    title: 'Bodier',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#3B8070' },

  css: [
    { src: '~styles/main.sass', lang: 'sass' },
  ],

  plugins: [
    '~plugins/global-components',
    '~plugins/global-const',
    '~plugins/vue-axios',
    '~plugins/vue-inputmask',
    '~plugins/vue-dayjs',
    '~plugins/vue-datetime',
    { src: '~plugins/vue-swiper', ssr: false },
    { src: '~plugins/vue-pagination', ssr: false }
  ],

  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],

  svgSprite: {
    input: '~/static/img/svg/',
    elementClass: 'svg-icon'
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  server: {
    port: 8091
  },
  router: {
    middleware: ['auth']
  },
  render: {
    bundleRenderer: {
      runInNewContext: false
    }
  }
}
