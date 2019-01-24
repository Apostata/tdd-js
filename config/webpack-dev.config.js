// config files
const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const devServer = require('./devServer');

const nodeENV = process.env.NODE_ENV;

/*
target é node caso o ambiente seja de teste
*/
const webpackConfig = {
  context: path.resolve(__dirname, '../src'), // onde é que serão buscadas as entrys e loaders
  mode: nodeENV !== 'development' ? 'production' : 'development',
  target: nodeENV === 'test' ? 'node' : 'web',
  entry: {
    main: './main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: nodeENV === 'production' ? 'source-map' : 'eval-source-map',
  module: {
    rules: loaders,
  },
  plugins, // shorthand => plugins : plugins
  devServer,
  watch: true,
};

module.exports = webpackConfig;
