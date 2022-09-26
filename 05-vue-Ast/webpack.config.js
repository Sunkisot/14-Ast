const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: 'ast'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  }
}