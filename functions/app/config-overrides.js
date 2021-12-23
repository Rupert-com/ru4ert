const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')

module.exports = {
  webpack: function (config, env) {
    if (env === 'production') {
      // remove hashes from images because of SEO ranking
      config.module.rules[1].oneOf[1].options.name = 'static/media/[name].[ext]'

      config.plugins = config.plugins.concat([
        new PrerenderSPAPlugin({
          routes: ['/', '/FullStackDevelopment', '/Refenences', '/Skills', '/SEO', '/Services'],
          staticDir: path.join(__dirname, 'build'),
        }),
      ])
    }

    return config
  },
}
