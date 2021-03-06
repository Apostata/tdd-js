// config files
const loaders = require('./loaders');
const plugins = require('./plugins');
const devServer = require('./devServer');

const nodeENV = process.env.NODE_ENV;

/*
target é node caso o ambiente seja de teste
*/
const webpackConfig = {
  mode: nodeENV !== 'development' ? 'production' : 'development',
  target: nodeENV === 'test' ? 'node' : 'web',
  entry: {
    app: './src/main.js',
  },
  output: {
    filename: '[name].js',
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
