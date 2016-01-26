const path = require('path')
const webpack = require('webpack')
const BrowserSync = require('browser-sync-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/app.ts'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BrowserSync({
      host: 'localhost',
      port: 3001,
      proxy: 'http://localhost:3000'
    })
  ],
  module: {
    loaders: [{
      test: /\.tsx?/,
      loaders: ['ts-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
}
