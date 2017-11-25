const {join} = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: ' The Newcastle United Blog | News and Commentary On Newcastle United By Ed Harrison, A Proud Exiled Geordie And Lifelong Fan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'News and Commentary On Newcastle United By Ed Harrison, A Proud Exiled Geordie And Lifelong Fan' },
      { hid: 'name', name: 'author', content: 'Ed Harrison'},
      { hid: 'keywords', name: 'keywords', content: 'Newcastle United, Magpies, UK, England, Newcastle, Premier, Premier League, nufc, nufcblog, League, Football, Championship, Soccer, Champions League, Europa League, St. James Park,  UEFA, Tyneside, FA, Geordie, Geordies, fans, blog, MLS'},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
    ]
  },
  css: [
    {src: join(__dirname, 'assets/scss/main.scss'), lang: 'scss'}
  ],
  modules: [
    '@nuxtjs/axios'
  ],
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
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
