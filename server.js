const path = require('path')
const express = require('express')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.dev')

const app = express()
const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  //noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'app.html')))

app.listen(3000, err =>
  err ?
    console.log(err) :
    console.log('Listening at localhost:3000...'))
