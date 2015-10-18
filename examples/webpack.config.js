
var webpack = require('webpack')

module.exports = {

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './examples/entry.js',
  ],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/examples'
  },

  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx?$)/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './examples',
    historyApiFallback: true,
    hot: true
  }

}

