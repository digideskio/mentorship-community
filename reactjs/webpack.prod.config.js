var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var ip = '188.166.208.127'
var config = require('./webpack.base.config.js')

config.plugins = config.plugins.concat([
  new BundleTracker({filename: '../django/webpack-stats.json'}),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
      'BASE_API_URL': JSON.stringify('http://'+ip+'/api/'),
  }}),
  // keeps hashes consistent between compilations
  new webpack.optimize.OccurenceOrderPlugin(),
  // minifies your code
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
])

config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }
)

module.exports = config
