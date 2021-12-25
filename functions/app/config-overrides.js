const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')

// https://github.com/chrisvfritz/prerender-spa-plugin
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  webpack: function (config, env) {
    if (env === 'production') {
      // remove hashes from images because of SEO ranking
      config.module.rules[1].oneOf[1].options.name = 'static/media/[name].[ext]'
      const renderer = new Renderer({
        renderAfterTime: 10000,
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
      ])
    }

    return config
  },
}
