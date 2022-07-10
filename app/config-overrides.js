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
      // config.module.rules[1].oneOf[1].options.name = 'static/media/[name].[ext]'
      // config.module.rules[1].oneOf[1].test.push('/\\.svg$/')
    }

    return config
  },
}
