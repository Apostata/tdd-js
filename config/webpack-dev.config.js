// config files
const jsLoader = require('./loaders/jsLoaders');
const plugins = require('./plugins');
const devServer = require('./devServer');

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
  devtool: 'eval-source-map',
  module: {
    rules: [
      // webpack 2 trocar por loaders:[
      jsLoader,
      // ,cssLoaders,
      // ,fileLoaders
    ],
  },
  plugins, // shorthand => plugins : plugins
  devServer,
  watch: true,
};

module.exports = webpackConfig;
