module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hst2125-bv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  },
  /*generate: {
    subFolders: false
  },*/
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bootstrap-vue',
    // CSS file in the project
    '@/assets/custom-scss.scss'//,
    // SCSS file in the project
    //'@/assets/css/main.scss'
  ],
  //routerBase,
  //srcDir: 'parcours/',
  build: {
    /*
    ** Run ESLint on save
    */

   // activer pour generate
    publicPath: '_nuxt/',
    
    /*extend (config, { isDev, isClient }) {
      if (!isDev) {
        // relative links, please.
        config.output.publicPath = './_nuxt/'
      }
      return config;
    }*/
    extend(config, ctx) {
    }
  },
  mode: 'universal',
  //srcDir: 'pages/',
  router: {


   // activer pour generate
    base: '/pluginfile.php/3813557/mod_resource/content/3/hst2125-bv/'
    //linkActiveClass: 'is-active'//,
    //base: process.env.DEPLOY_ENV === 'STATIC' ? '/nuxt-example/' : '/'
    //base: process.env.NODE_ENV === 'dev' ? '' : '/HST2125-Nuxt/'
  }

}

