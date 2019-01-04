const webpack = require('webpack');

// config files
const jsLoader = require('./loaders/jsLoaders');
const plugins = require('./plugins');
const optimization = require('./optimization');

const nodeENV = process.env.NODE_ENV || 'production';

console.log(nodeENV);

const webpackConfig = {
  mode: nodeENV, // para utilizar o optimization
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].js',
  },
  optimization,
  devtool: 'source-map',
  module: {
    rules: [
      // webpack 2 trocar por loaders:[
      jsLoader,
      // ,cssLoaders,
      // ,fileLoaders
    ],
  },
  plugins,
  watch: true,
};

module.exports = webpackConfig;
