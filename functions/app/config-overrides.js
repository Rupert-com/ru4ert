const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')
// const fs = require('fs')
const fse = require('fs-extra')

// https://github.com/chrisvfritz/prerender-spa-plugin
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  webpack: function (config, env) {
    if (env === 'production') {
      // remove hashes from images because of SEO ranking
      config.module.rules[1].oneOf[1].options.name = 'static/media/[name].[ext]'
      // config.module.rules[1].oneOf[1].test.push('/\\.svg$/')
      const renderer = new Renderer({
        renderAfterTime: 10000,
        // headless: false,
        // renderAfterElementExists: "#app"
      })

      config.plugins = config.plugins.concat([
        new PrerenderSPAPlugin({
          routes: ['/', '/FullStackDevelopment', '/Refenences', '/Skills', '/SEO', '/Services'],
          staticDir: path.join(__dirname, 'build'),
          outputDir: path.join(__dirname, 'dist'),
          indexPath: path.join(__dirname, 'build', 'index.html'),

          // https://github.com/kangax/html-minifier#options-quick-reference

          // wird eh nur von bots aufgerufen also eher selten, also egal
          // minify: {
          //   minifyCSS: true,
          //   sortAttributes: true,
          // },
          renderer,
        }),
        {
          apply: compiler => {
            compiler.hooks.afterEmit.tap('AfterEmitPlugin', compilation => {
              fse.copySync(path.join(__dirname, 'build'), path.join(__dirname, 'dist'), {
                overwrite: true,
                filter: (src, des) => des !== path.join(__dirname, 'dist', 'index.html'),
              })
            })
          },
        },
      ])
    }

    return config
  },
}
