var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'www');
var APP_DIR = path.resolve(__dirname, 'www_src');

var config = {
  entry: APP_DIR + '/js/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      "oljs":  path.join(__dirname, "www_src/js/ol.js")
    }
  }
};

module.exports = config;