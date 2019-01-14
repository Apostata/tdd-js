// config files
const loaders = require('./loaders');
const plugins = require('./plugins');

const nodeENV = process.env.NODE_ENV;

// eslint-disable-next-line no-console
console.log(nodeENV);

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
  watch: true,
};

module.exports = webpackConfig;
