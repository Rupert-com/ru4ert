module.exports = {
  webpack: function (config, env) {
    // remove hashes from images because of SEO ranking
    config.module.rules[1].oneOf[1].options.name = 'static/media/[name].[ext]'
    return config
  },
}
