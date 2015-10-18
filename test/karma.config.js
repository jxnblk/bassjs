
var webpack = require('webpack')

var configuration = {
  browsers: [
    // 'Firefox',
    // 'Chrome_xs',
    'Chrome_sm',
    // 'Chrome_md',
    // 'Chrome_lg'
  ],

  customLaunchers: {
    Chrome_xs: {
      base: 'Chrome',
      flags: [ '--window-size=320,640' ]
    },
    Chrome_sm: {
      base: 'Chrome',
      flags: [ '--window-size=640,480' ]
    },
    Chrome_md: {
      base: 'Chrome',
      flags: [ '--window-size=896,672' ]
    },
    Chrome_lg: {
      base: 'Chrome',
      flags: [ '--window-size=1280,960' ]
    }
  },

  singleRun: true,

  files: [
    'index.js'
  ],

  frameworks: [
  ],

  plugins: [
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-webpack'
  ],

  preprocessors: {
    'index.js': [ 'webpack' ]
  },

  reporters: [ 'dots' ],

  webpack: {
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
  },

  webpackMiddleware: {
    noInfo: true
  }

}

if (process.env.TRAVIS) {
  configuration.browsers = [
    'Firefox'
  ]
}

module.exports = function (config) {
  config.set(configuration)
}

