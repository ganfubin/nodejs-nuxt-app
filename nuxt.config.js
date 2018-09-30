module.exports = {
    dev: (process.env.NODE_ENV !== 'production'),
  /*
  ** Headers of the page
  */
  head: {
    title: 'nodejs-house-app',
    meta: [
      { charset: 'utf-8' },
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['mint-ui']
  },
  /*
  * 全局样式
  * */
  css: [
    'mint-ui/lib/style.css',
    {src: '~assets/css/global.less', lang: 'less'}
  ],
  /*
   * 懒加载
   * */
  render: {
    resourceHints: false
  },
  /*
  * 插件
  * */
  plugins:['~/plugins/plugins'],
};

